import { useState } from "react";
import "./css/update-phone.css";

const UpdatePhone = (props) => {
  const [phone, setPhone] = useState("");
  return (
    <>
      <div className="update-phone-main">
        <form noValidate onSubmit={props.updatePhone}>
          <input
            type="text"
            name="phone"
            value={phone}
            className="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit">Save</button>
          <button type="reset">Cancel</button>
        </form>
      </div>
    </>
  );
};
export default UpdatePhone;
