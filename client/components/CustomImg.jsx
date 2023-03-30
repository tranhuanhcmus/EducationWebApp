import Text from "./Text";
import Img from "./Img";
import List from "./List";
const CustomImg = () => {
  return (
    <div className="bg-yellow_100 flex h-[270px] md:h-[auto] items-center justify-center max-w-[1280px] mx-[auto] md:px-[20px] px-[30px] py-[20px] rounded-[20px] w-[100%]">
      <div className="flex flex-col gap-[1px] items-start justify-center w-[100%]">
        <Text
          className="font-medium text-black_900 text-left tracking-[0.48px] w-[auto]"
          variant="body4"
        >
          Home | Courses
        </Text>
        <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
          <Text
            className="font-semibold leading-[50.00px] text-gray_900 text-left"
            as="h2"
            variant="h2"
          >
            <>
              Educatsy Courses
              <br />
              For All Standards
            </>
          </Text>
          <div className="font-airbnbcerealapp h-[210px] relative md:w-[100%] w-[32%]">
            <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
              <div className="flex flex-col md:gap-[40px] gap-[85px] justify-start w-[100%]">
                <div className="flex items-center justify-start md:ml-[0] ml-[26px] md:w-[100%] w-[32%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <List
                        className="sm:flex-col flex-row gap-[7px] grid grid-cols-2 w-[16%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col sm:ml-[0] relative w-[100%]">
                          <Text
                            className="mx-[auto] text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="mt-[-0.01px] mx-[auto] text-center text-deep_orange_400 w-[auto] z-[1]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-col sm:ml-[0] relative w-[100%]">
                          <Text
                            className="mx-[auto] text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="mt-[-0.01px] mx-[auto] text-center text-deep_orange_400 w-[auto] z-[1]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                      </List>
                      <div className="md:h-[17px] h-[31px] relative w-[7%]">
                        <Text
                          className="absolute right-[0] text-center text-deep_orange_400 top-[0] w-[auto]"
                          variant="body6"
                        >
                          +
                        </Text>
                        <Text
                          className="absolute bottom-[0] left-[0] text-center text-deep_orange_400 w-[auto]"
                          variant="body6"
                        >
                          +
                        </Text>
                      </div>
                      <div className="flex flex-col relative w-[5%]">
                        <Text
                          className="mx-[auto] text-center text-deep_orange_400 w-[auto]"
                          variant="body6"
                        >
                          +
                        </Text>
                        <Text
                          className="mt-[-0.01px] mx-[auto] text-center text-deep_orange_400 w-[auto] z-[1]"
                          variant="body6"
                        >
                          +
                        </Text>
                      </div>
                      <div className="flex flex-col relative w-[5%]">
                        <Text
                          className="mx-[auto] text-center text-deep_orange_400 w-[auto]"
                          variant="body6"
                        >
                          +
                        </Text>
                        <Text
                          className="mt-[-0.01px] mx-[auto] text-center text-deep_orange_400 w-[auto] z-[1]"
                          variant="body6"
                        >
                          +
                        </Text>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[7px] grid grid-cols-5 w-[47%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col sm:ml-[0] relative w-[100%]">
                          <Text
                            className="mx-[auto] text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="mt-[-0.01px] mx-[auto] text-center text-deep_orange_400 w-[auto] z-[1]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-col sm:ml-[0] relative w-[100%]">
                          <Text
                            className="mx-[auto] text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="mt-[-0.01px] mx-[auto] text-center text-deep_orange_400 w-[auto] z-[1]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-col sm:ml-[0] relative w-[100%]">
                          <Text
                            className="mx-[auto] text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="mt-[-0.01px] mx-[auto] text-center text-deep_orange_400 w-[auto] z-[1]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-col sm:ml-[0] relative w-[100%]">
                          <Text
                            className="mx-[auto] text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="mt-[-0.01px] mx-[auto] text-center text-deep_orange_400 w-[auto] z-[1]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-col sm:ml-[0] relative w-[100%]">
                          <Text
                            className="mx-[auto] text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="mt-[-0.01px] mx-[auto] text-center text-deep_orange_400 w-[auto] z-[1]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                      </List>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[16%]">
                        <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[5%]">
                        <div className="md:h-[15px] h-[30px] relative w-[100%]">
                          <Text
                            className="absolute inset-x-[0] mx-[auto] text-center text-deep_orange_400 top-[0] w-[max-content]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-[auto] text-center text-deep_orange_400 w-[max-content]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                        <div className="md:h-[15px] h-[30px] relative w-[100%]">
                          <Text
                            className="absolute inset-x-[0] mx-[auto] text-center text-deep_orange_400 top-[0] w-[max-content]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-[auto] text-center text-deep_orange_400 w-[max-content]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                      </div>
                      <List
                        className="flex-col gap-[1px] grid w-[68%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_orange_400 w-[auto]"
                            variant="body6"
                          >
                            +
                          </Text>
                        </div>
                      </List>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="text-center text-deep_orange_400 w-[auto]"
                        variant="body6"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange_400 w-[auto]"
                        variant="body6"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange_400 w-[auto]"
                        variant="body6"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange_400 w-[auto]"
                        variant="body6"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange_400 w-[auto]"
                        variant="body6"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange_400 w-[auto]"
                        variant="body6"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange_400 w-[auto]"
                        variant="body6"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange_400 w-[auto]"
                        variant="body6"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange_400 w-[auto]"
                        variant="body6"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange_400 w-[auto]"
                        variant="body6"
                      >
                        +
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="backdrop-opacity-[0.5] bg-black_900_cc blur-[81.00px] h-[14px] rounded-[194px] w-[100%]"></div>
              </div>
            </div>
            <Img
              src="../public/anh1.png"
              className="absolute h-[210px] inset-[0] justify-center m-[auto] object-cover w-[97%]"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomImg;
