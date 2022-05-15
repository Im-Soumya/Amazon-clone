import { CheckCircleIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const Success = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/orders");
  }

  return (
    <div className="bg-gray-100 h-screen">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">Thank you, Your order has been confirmed</h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation once your items have shipped, if you would like to check the status of the order, please the link below.
          </p>
          <button className="button mt-8" onClick={handleClick}>Go to my orders</button>
        </div>
      </div>
    </div>
  )
}

export default Success;