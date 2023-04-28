import { useRouter } from "next/router";
const IdPage = () => {
	const router = useRouter();

	console.log(router.query.id);
	return <div>IdPage</div>;
};

export default IdPage;
 