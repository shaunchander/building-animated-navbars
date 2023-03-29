import Navbar from "./Navbar";

export default function Page() {
	return (
		<body className="bg-stone-900 h-screen flex flex-col relative">
			<Navbar />
			<main className="flex-1 p-6 container mx-auto">
				<div className="space-y-6">
					<h1 className="text-5xl font-black text-white">
						ACME is a revolutionary product.
					</h1>
					<p className="text-lg text-stone-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
						adipisci cumque non molestias suscipit ea deserunt magni quae
						pariatur a quibusdam deleniti magnam, distinctio quis. Officiis aut
						ipsam non ea!
					</p>
					<button className="p-4 text-sm font-semibold bg-blue-600 rounded-lg text-white flex w-full justify-center shadow-md shadow-blue-600/30">
						Learn More
					</button>
				</div>
			</main>
			<footer></footer>
		</body>
	);
}
