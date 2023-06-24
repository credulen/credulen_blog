import Image from "next/image";

export const HighlightCards = () => {
	return (
		<div className="card mb-3">
			<Image
				src="/assets/blockImg.jpg"
				className="card-img-top"
				width={200}
				height={350}
				alt="Picture of the author"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					This is a wider card with supporting text below as a natural lead-in
					to additional content. This content is a little bit longer.
				</p>
				<p className="card-text">
					<small className="text-body-secondary">Last updated 3 mins ago</small>
				</p>
			</div>
		</div>
	);
};

export const ArticleCards = () => {
	return (
		<div className="card mt-3">
			<Image
				src="/assets/blockImg.jpg"
				className="card-img-top"
				width={200}
				height={350}
				alt="Picture of the author"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export const RecentPostCards = () => {
	return (
		<div className="card mb-5">
			<div className="card-header text-center">Recent Posts</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item text-center">An item</li>
				<li className="list-group-item text-center">A second item</li>
				<li className="list-group-item text-center">A third item</li>
				<li className="list-group-item text-center">A third item</li>
				<li className="list-group-item text-center">A third item</li>
				<li className="list-group-item text-center">A third item</li>
			</ul>
		</div>
	);
};
