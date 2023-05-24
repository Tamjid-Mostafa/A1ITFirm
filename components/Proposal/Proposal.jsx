import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '@components/ui/Button'
import Input from '@components/ui/Input'
import hitToast from '@components/ui/Toast/hitToast'
import axios from 'axios'
import { useUI } from '@components/ui/context'

const Proposal = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        companyName: '',
        checkboxValue: [],
    })
    const [validationMessages, setValidationMessages] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        companyName: '',
        checkboxValue: '',
    })


    const [message, setMessage] = useState('')
    const [dirty, setDirty] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const { closeModal } = useUI()
    const handleChange = (field, value) => {
        if (field === 'checkboxValue') {
            setFormValues((prevValues) => {
                const updatedCheckboxValue = prevValues.checkboxValue.includes(value)
                    ? prevValues.checkboxValue.filter((item) => item !== value)
                    : [...prevValues.checkboxValue, value]

                return { ...prevValues, checkboxValue: updatedCheckboxValue }
            })
        } else {
            setFormValues((prevValues) => ({ ...prevValues, [field]: value }))
        }
        setDirty(true) // Set dirty state to true when a field is changed
    }
    const services = [
        'Lead Generation',
        'Search Engine Optimization',
        'Email Marketing',
        'Web Design & Development',
    ]

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        if (disabled) {
            return // Prevent submission if the form is disabled due to validation failure
        }
        // Handle form submission logic
        setMessage('')
        setDirty(false)
        setDisabled(true)
        const { email, firstName, lastName, checkboxValue, companyName, phoneNumber } = formValues
        const data = {
            email,
            firstName,
            lastName,
            phoneNumber,
            companyName,
            checkboxValue,
        }
        try {
            const res = await axios.post('/api/proposals', data)
            closeModal()
            setDirty(true)
            setDisabled(false)
            setLoading(false)
            hitToast('success', res.data.message)
        } catch (err) {
            console.error(err)
            setMessage('Something went wrong')
            setDirty(true)
            setDisabled(false)
        }
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }

    const handleValidation = useCallback(() => {
        if (dirty) {
            const validEmail = validateEmail(formValues.email)
            const validFirstName = formValues.firstName.trim() !== ''
            const validLastName = formValues.lastName.trim() !== ''
            const validCheckboxValue = formValues.checkboxValue.length > 0

            setValidationMessages({
                email: validEmail ? '' : 'Please enter a valid email address.',
                firstName: validFirstName ? '' : 'Please enter your first name.',
                lastName: validLastName ? '' : 'Please enter your last name.',
                checkboxValue: validCheckboxValue ? '' : 'Please select at least one service.',
            })

            setDisabled(!(validEmail && validFirstName && validLastName && validCheckboxValue))
        }
    }, [formValues.email, formValues.firstName, formValues.lastName, formValues.checkboxValue, dirty])



    useEffect(() => {
        handleValidation()
    }, [handleValidation])

    return (
        <form
            onSubmit={handleSubmit}
            className="w-80 flex flex-col justify-between p-3"
        >
            <div className="flex justify-center pb-12">
                <Image
                    src="/logo.svg"
                    alt="Face2"
                    width={80}
                    height={100}
                    className=""
                    priority
                />
            </div>
            <div className="flex flex-col space-y-4">
                {message && (
                    <div
                        className="text-red border border-red p-3"
                        dangerouslySetInnerHTML={{
                            __html: message,
                        }}
                    ></div>
                )}
                <Input
                    placeholder="First Name"
                    onChange={(value) => handleChange('firstName', value)}
                    required
                />
                {validationMessages.firstName && <p className="text-red">{validationMessages.firstName}</p>}

                <Input
                    placeholder="Last Name"
                    onChange={(value) => handleChange('lastName', value)}
                    required
                />
                {validationMessages.lastName && <p className="text-red">{validationMessages.lastName}</p>}

                <Input
                    type="email"
                    placeholder="Email"
                    onChange={(value) => handleChange('email', value)}
                    required
                />
                {validationMessages.email && <p className="text-red">{validationMessages.email}</p>}
                <Input
                    type="text"
                    placeholder="Company Name"
                    onChange={(value) => handleChange('companyName', value)}
                />
                {validationMessages.companyName && <p className="text-red">{validationMessages.companyName}</p>}
                <Input
                    type="text"
                    placeholder="Phone Number"
                    onChange={(value) => handleChange('phoneNumber', value)}
                    required
                />
                {validationMessages.phoneNumber && <p className="text-red">{validationMessages.phoneNumber}</p>}

                {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <Input
                            type="checkbox"
                            variant="checkbox"
                            value={service}
                            onChange={() => handleChange('checkboxValue', service)}
                        />
                        <span>{service}</span>
                    </div>
                ))}
                {validationMessages.checkboxValue && <p className="text-red">{validationMessages.checkboxValue}</p>}


                <div className="pt-2 w-full flex flex-col">
                    <Button
                        variant="slim"
                        type="submit"
                        className="bg-accent-9 border-none"
                        disabled={disabled}
                        loading={loading}
                    >
                        Submit Proposal
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default Proposal
