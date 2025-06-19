import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function LoadingLayout() {
  return (
    <div className="loading-layout">
      <FontAwesomeIcon icon={faSpinner} spin />
    </div>
  );
}
