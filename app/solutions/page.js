import { SolutionsCard } from "@/components/Cards";
import solutionsData from "../../data/solutionpagedata.json";
import Link from "next/link";

const Solutions = () => {
	return (
		<div className="container">
			<h1>Solutions</h1>
			<p>
				We position you or your business ahead of the curve in the wake of
				technology disruption
			</p>

			<div>
				<Link
					href="/solutions/individualsolnform"
					className="btn btn-success me-3">
					Individuals
				</Link>

				<Link href="/solutions/businesssolnform" className="btn btn-info">
					Business/Institutions
				</Link>
			</div>

			<div className="mt-5">
				<h2>Individuals</h2>
				<div className="row">
					{solutionsData.individualSolutions.map((data) => {
						return (
							<div className="col-md-4" key={data.id}>
								<SolutionsCard />
							</div>
						);
					})}
				</div>
			</div>

			<div className="mt-5 pt-5">
				<h2>Business/Institution</h2>

				<div className="row">
					{solutionsData.individualSolutions.map((data) => {
						return (
							<div className="col-md-4" key={data.id}>
								<SolutionsCard />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Solutions;
