import React from "react";

import Img from "../components/Img";
import Input from "../components/Input";
import Button from "../components/Button";
import { makeRequest } from "./../utils/axios";
import List from "../components/List";
import Text from "../components/Text";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import utils from "../utils/utils";
import {
  HandleDeleteItemInCart,
  HandlePayMent,
  GetCourseInCart,
} from "../utils/fetchData";
import { useParams } from "react-router-dom";

const CartPage = () => {
  const [itemsInCart, setItemsInCart] = React.useState([]);
  const [totalprice, setTotalPrice] = React.useState(0);
  const [PayMentID, SetPayMentID] = React.useState("");
  const params = useParams();
  const currentUser = useSelector((state) => state.auth.user);
  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    var sum = 0;
    if (items) {
      setItemsInCart(items);
      items.forEach((element) => {
        sum = sum + element.PRICE;
        //parseInt(element.price.substr(1, element.PRICE.indexOf(".") - 1));
      });
      setTotalPrice(sum);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemsInCart));
    var sum = 0;
    itemsInCart.forEach((element) => {
      sum = sum + element.PRICE;
      //parseInt(element.PRICE.substr(1, element.PRICE.indexOf(".") - 1));
    });
    setTotalPrice(sum);
  }, [itemsInCart]);

  const DeleteCartHandler = async (id) => {
    const Data = {
      CourseID: id,
      UID: currentUser.ID,
    };
    await HandleDeleteItemInCart(Data);
    setItemsInCart((courses) => courses.filter((course) => course.CID !== id));
  };
  const sendRequest = async (data) => {
    const res = await makeRequest({
      method: "post",
      url: "/momo",
      data: data,
    });
    const request = await res.data;
    console.log(request);

    return request;
  };

  const handleSubscribe = async (id, name, price) => {
    if (itemsInCart.length > 0) {
      const data = { id, name, price, itemsInCart };
      const message = await sendRequest(data);
      SetPayMentID(message);
      alert("Action completed. You can now close this page.");
    } else {
      alert("you should add item to cart");
    }
  };

  return (
    <>
      <div className="flex flex-col font-raleway items-center justify-start pt-[75px] md:px-10 sm:px-5 px-[75px] w-full">
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
          <Text className="font-bold sm:text-4xl md:text-[38px] text-[40px] text-black_900 text-center tracking-[-0.50px] w-auto">
            Your Cart
          </Text>
          <div className="flex md:flex-col flex-row font-rubik md:gap-10 gap-[61px] items-center justify-start w-full">
            <List
              className="flex-1 flex-col gap-[30px] grid items-start w-full"
              orientation="vertical"
            >
              {itemsInCart.map((props, index) => (
                <CartItem
                  key={index}
                  DeleteCartHandler={DeleteCartHandler}
                  {...props}
                ></CartItem>
              ))}
            </List>
            <div className="bg-gray_53 flex sm:flex-1 flex-col items-start justify-start sm:px-5 px-[27px] py-[31px] self-stretch w-auto sm:w-full">
              <div className="flex flex-col gap-[27px] items-start justify-start self-stretch w-auto">
                <Text className="font-bold font-raleway text-black_900 text-left text-xl tracking-[-0.50px] w-auto">
                  Cart Total
                </Text>
                <div className="flex flex-col font-rubik gap-5 items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text className="font-normal font-raleway not-italic text-gray_500 text-left text-xl tracking-[-0.50px] w-auto">
                      Subtotal
                    </Text>
                    <Text className="font-poppins font-semibold text-black_900 text-left text-xl tracking-[-0.50px] w-auto">
                      {`${totalprice}.000 đ`}
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start w-full">
                    <Input
                      wrapClassName="bg-white_A700 flex-1 px-[17px] py-3.5 w-[73%]"
                      className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900_3f text-black_900_3f text-left text-sm tracking-[-0.50px] w-full"
                      name="frame48096036"
                      placeholder="Your Voucher"
                    ></Input>
                    <Button className="bg-bluegray_900 cursor-pointer font-semibold leading-[normal] min-w-[98px] py-3.5 text-center text-sm text-yellow_100 tracking-[-0.50px] w-auto">
                      Apply
                    </Button>
                  </div>
                </div>
                <div className="bg-black_900 h-px w-full" />
                <div className="flex flex-row items-center justify-between w-full">
                  <Text className="font-normal font-raleway not-italic text-gray_500 text-left text-xl tracking-[-0.50px] w-auto">
                    Total
                  </Text>
                  <Text className="font-poppins font-semibold text-black_900 text-left text-xl tracking-[-0.50px] w-auto">
                    {`${totalprice}.000 đ`}
                  </Text>
                </div>
                <Button
                  onClick={() => {
                    handleSubscribe(
                      currentUser.ID,
                      currentUser.NAME,
                      totalprice
                    );
                  }}
                  className="bg-bluegray_900 cursor-pointer font-rubik font-semibold leading-[normal] md:px-10 sm:px-5 px-[120px] py-[15px] text-center text-lg text-yellow_100 tracking-[-0.50px] w-full"
                >
                  Checkout Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
