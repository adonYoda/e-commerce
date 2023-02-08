import { useParams } from 'react-router';

const useGetParams = () => {
	const params = useParams();
	if (params['*']) {
		const paramsList = params['*'].split('/');
		return paramsList;
	}
	return [];
};

export default useGetParams;
