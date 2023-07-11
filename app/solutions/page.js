import {
	BusinessSolutionsCard,
	IndividualSolutionsCard,
	SolutionsCard,
} from "@/components/Cards";
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
				<Link href="#indiSolution" className="btn btn-success me-3">
					Individuals
				</Link>

				<Link href="#busSolution" className="btn btn-info">
					Business/Institutions
				</Link>
			</div>

			<div id="indiSolution"></div>
			<div id=""></div>
			<div id=""></div>
			<div id=""></div>
			<div id=""></div>
			<div id=""></div>
			<div id=""></div>
			<div className="mt-5">
				<h2 className="mb-4">Individuals</h2>
				<div className="row">
					{solutionsData.individualSolutions.map((data) => {
						return (
							<div className="col-md-4" key={data.id}>
								<IndividualSolutionsCard />
							</div>
						);
					})}
				</div>
			</div>

			<div id="busSolution"></div>
			<div id=""></div>
			<div id=""></div>
			<div id=""></div>
			<div id=""></div>
			<div id=""></div>
			<div id=""></div>
			<div className="mt-5 pt-5">
				<h2 className="pb-2">Business/Institution</h2>

				<div className="row">
					{solutionsData.individualSolutions.map((data) => {
						return (
							<div className="col-md-4" key={data.id}>
								<BusinessSolutionsCard />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Solutions;
