import Image from "next/image";
import { MagnifyingGlassIcon, HomeIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

export default function Header(): JSX.Element {
	return (
		<header className="flex flex-row justify-between items-center py-4 px-2 md:px-30 lg:px-60 shadow-sm sticky top-0 bg-white">
			<div className="w-1/6 md:w-1/3 flex justify-center md:justify-start items-center">
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
					width={30}
					height={30}
					alt=""
					className="md:hidden"
				/>
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
					width={150}
					height={50}
					alt=""
					className="hidden md:block"
				/>
			</div>
			<div className="flex flex-row items-center w-4/6 md:w-1/3 border rounded-full border-black px-4 py-1">
				<MagnifyingGlassIcon className="h-6 cursor-pointer" />
				<input type="search" placeholder="Search" className="w-full py-1 px-4 border-none focus:ring-0 focus:outline-none" />
			</div>
			<div className="w-1/6 md:w-1/3 flex flex-row justify-end items-center">
				<HomeIcon className="h-6 cursor-pointer mx-2 hidden md:block" />
				<PlusCircleIcon className="h-6 cursor-pointer mx-2 hidden md:block" />

				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
					width={30}
					height={30}
					alt=""
					className="rounded-full border border-black mx-2 cursor-pointer w-8 h-8"
				/>
			</div>
		</header>
	);
}
