import { FC } from 'react';

interface Props {
    name: string,
    type: "danger" | "regular" | "normal",
    // onClick?: () => void
    onClick?(): void,
    // onChange?()): void
};

const AppButton: FC<Props> = ({ name, type, onClick }) => {
    let color = "";

    switch (type) {
        case "danger": color = "bg-red-500";
            break;
        case "regular": color = "bg-blue-500";
            break;
        case "normal": color = "bg-gray-500";
            break;
    };

    return (
        <button className={color + " text-white font-semibold p-2 rounded-md"} onClick={onClick}>{name}</button>
    )
};

export default AppButton;
