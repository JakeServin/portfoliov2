import Image from "next/image";

type ButtonProps = {
	type: "button" | "submit";
	title: string;
	icon?: string;
	backgroundColor?: string;
	full?: boolean;
};
const Button = ({ type, title, icon, backgroundColor, full }: ButtonProps) => {
	return (
		<button
			className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
        ${
			backgroundColor
				? `${backgroundColor}`
				: "bg-coral-red text-white"
		}
        ${full ? "w-full" : ""}
      `}
			type={type}
		>
			{icon && <Image src={icon} alt={title} width={24} height={24} />}
			<label className="whitespace-nowrap cursor-pointer">{title}</label>
		</button>
	);
};

export default Button;
