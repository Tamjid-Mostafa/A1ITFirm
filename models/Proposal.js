import { model, models, Schema } from "mongoose";

const ProposalSchema = new Schema(
  {
    email: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    companyName: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    checkboxValue: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Proposal = models?.proposals || model("proposals", ProposalSchema);

export default Proposal;
