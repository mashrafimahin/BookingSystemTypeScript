// hooks
import { useState, type FC } from "react";
// iterface
export interface FormStyle {
  firstName: string;
  lastName: string;
  addressOne: string;
  addressTwo: string;
  city: string;
  region: string;
  post: string;
  country: string;
  email: string;
  phone: number;
  adults: number;
  kids: number;
}
// component
import Input from "./Input";
import Selection from "./Select";
import Button from "./Button";
// data
import { countries } from "../data/Info";
// main
const Form: FC = () => {
  // form data
  const [formData, setFormData] = useState<FormStyle>({
    firstName: "",
    lastName: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    region: "",
    post: "",
    country: "",
    email: "",
    phone: 0,
    adults: 0,
    kids: 0,
  });

  // handle click
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // example validation
    if (
      !formData.firstName &&
      !formData.lastName &&
      !formData.addressOne &&
      !formData.addressTwo &&
      !formData.city &&
      !formData.country &&
      !formData.email &&
      !formData.phone &&
      !formData.adults &&
      !formData.kids
    ) {
      alert("Please fill required fields");
      return;
    }
    // submit logic
    console.log("Form submitted:", formData);
  };

  return (
    <div className="p-10 w-full max-w-xl rounded-md bg-white flex flex-col items-center justify-center">
      {/* title text */}
      <h1 className="mb-6 font-sans text-2xl lg:text-3xl lg:font-bold text-gray-950 tracking-wide">
        Reserve a Room
      </h1>
      {/* form */}
      <form className="commonPartition gap-3">
        {/* name part */}
        <div className="commonPartition">
          <label className="commonLabel">
            Full Name<sup className="commonSup">*</sup>
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type={"text"}
              name={"firstName"}
              placeholder={"First Name"}
              setData={setFormData}
            />
            <Input
              type={"text"}
              name={"lastName"}
              placeholder={"Last Name"}
              setData={setFormData}
            />
          </div>
        </div>
        {/* address part */}
        <div className="commonPartition">
          <label className="commonLabel">
            Address<sup className="commonSup">*</sup>
          </label>
          <Input
            type={"text"}
            name={"addressOne"}
            placeholder={"Address Line One"}
            setData={setFormData}
          />
          <Input
            type={"text"}
            name={"addressTwo"}
            placeholder={"Address Line Two"}
            setData={setFormData}
          />
          {/* grid box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Input
              type={"text"}
              name={"city"}
              placeholder={"City"}
              setData={setFormData}
            />
            <Input
              type={"text"}
              name={"region"}
              placeholder={"Region"}
              setData={setFormData}
            />
            <Input
              type={"text"}
              name={"post"}
              placeholder={"Postal/Zip Code"}
              setData={setFormData}
            />
            <Selection
              options={countries}
              name="country"
              setData={setFormData}
            />
          </div>
        </div>
        {/* contact info */}
        <div className="commonPartition flex flex-col gap-2">
          <h2 className="font-bold font-sans text-gray-800">
            Contact Information
          </h2>
          <div className="flex flex-col gap-2 sm:flex-row">
            {/* info one */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="commonLabel">
                Contact email<sup className="commonSup">*</sup>
              </label>
              <Input
                type={"text"}
                name={"email"}
                placeholder={"john.doe@example.com"}
                setData={setFormData}
              />
            </div>
            {/* info two */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="commonLabel">
                Contact phone<sup className="commonSup">*</sup>
              </label>
              <Input
                type={"text"}
                name={"phone"}
                placeholder={"+123 456 789"}
                setData={setFormData}
              />
            </div>
          </div>
        </div>
        {/* accomodation */}
        <div className="commonPartition flex flex-col gap-2">
          <h2 className="font-bold font-sans text-gray-800">Accomodation</h2>
          <div className="flex flex-col gap-2 sm:flex-row">
            {/* info one */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="commonLabel">
                Number of Adults<sup className="commonSup">*</sup>
              </label>
              <Input
                type={"number"}
                name={"adults"}
                placeholder={""}
                setData={setFormData}
              />
            </div>
            {/* info two */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="commonLabel">Number of Kids</label>
              <Input
                type={"number"}
                name={"kids"}
                placeholder={"If there are any"}
                setData={setFormData}
              />
            </div>
          </div>
        </div>
        {/* submit */}
        <Button onClick={handleClick}>Room Reservation</Button>
      </form>
    </div>
  );
};

export default Form;
