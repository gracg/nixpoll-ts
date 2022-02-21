import { PollOption } from "./PollOption";

export interface Poll {
    id :number|null;
    title :string;
    description :string|null;
    options :PollOption[];
}