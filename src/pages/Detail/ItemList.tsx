import { baseImgUrl } from "../../constants";

type CompanyType = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type LanguageType = {
  english_name: string;
  iso_639_1: string;
  name: string;
  logo_path?: string | null;
};

type CountryType = {
  iso_3166_1: string;
  name: string;
  logo_path?: string | null;
};

type PropsType = {
  data: CompanyType[] | CountryType[] | LanguageType[];
};

const ItemList = ({ data }: PropsType) => {
  return (
    <div>
      <div className="flex flex-wrap  items-center gap-5">
        {data.map((item, i) =>
          item?.logo_path ? (
            <img
              key={i}
              className="w-32 h-12 object-contain bg-white rounded-md p-2"
              src={baseImgUrl + item.logo_path}
              alt=""
            />
          ) : (
            <p
              key={i}
              className=" text-xl p-2 bg-gray-200 text-red-500 rounded-md "
            >
              {item.name}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default ItemList;
