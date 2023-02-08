import { useLocation } from 'react-router';

const useGetLocation = (path?: string) => {
	const location = useLocation();
	const locationList = location.pathname.split('%20').join(' ').split('/').slice(1);
	if (path) {
		const indexPath = locationList.indexOf(path);
		if (indexPath >= 0) {
			return locationList.slice(indexPath + 1);
		}
	}
	return locationList ?? [];
};

export default useGetLocation;
