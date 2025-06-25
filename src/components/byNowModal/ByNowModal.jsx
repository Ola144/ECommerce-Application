import React, { useState } from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { Timestamp } from "firebase/firestore";

function ByNowModal({ addressInfo, setAddressInfo, byNowFunction }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Button
        type="button"
        className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-100 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
        onClick={handleOpen}
      >
        Buy Now
      </Button>
      <Dialog open={open} handler={handleOpen} className="bg-pink-50">
        <DialogBody className="">
          <div className="mb-3">
            <input
              type="text"
              className="bg-pink border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-400 placeholder-pink-300"
              placeholder="Enter your name"
              value={addressInfo.name}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="bg-pink border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-400 placeholder-pink-300"
              placeholder="Enter your address"
              value={addressInfo.address}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  address: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="bg-pink border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-400 placeholder-pink-300"
              placeholder="Enter your pincode"
              value={addressInfo.pincode}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  pincode: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              className="bg-pink border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-400 placeholder-pink-300"
              placeholder="Enter your mobile number"
              value={addressInfo.mobileNumber}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  mobileNumber: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <Button
              onClick={() => {
                handleOpen();
                byNowFunction();
              }}
              className="w-full py-3 bg-pink-600 text-white hover:bg-pink-300 hover:text-gray-100 rounded-md"
            >
              Buy Now
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
}

export default ByNowModal;
