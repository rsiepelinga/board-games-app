import React from 'react';
import './logo-loading.css';

export default function LogoLoading() {
  return (
    <div className="loading">

      <div className="meeple">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 405 250" height="65" fill="none">
          <path
            id="right"
            d="M135.671 44.31c-1.176-56.535-65.799-53.606-65.988 0-13.05 7.804-42.644 20.006-56.318 33.044-13.673 13.038-13.966 23.152 0 29.253 13.966 6.101 19.359 6.397 31.592 8.337l-24.784 36.958c-9.75 14.381-16.797 21.749-17.155 44.012 1.804 6.553 4.024 7.196 8.489 7.073h58.176c5.278-.869 7.434-2.305 9.619-6.825 9.525-21.074 14.597-31.203 23.602-40.538 7.543 7.905 11.806 15.254 23.682 40.538 3.273 5.77 5.322 6.586 9.085 6.825h60.631c3.425-1.383 5.494-1.935 6.418-7.073-.052-15.196-3.794-23.075-16.541-44.012-10.713-14.146-15.764-22.292-24.679-36.958 6-.944 25.006-5.315 31.269-8.337 6.263-3.023 19.496-11.79 0-29.253-10.84-10.17-29.695-18.529-57.098-33.043Z"
          />
          <path
            id="left"
            d="M135.671 44.31c-1.176-56.535-65.799-53.606-65.988 0-13.05 7.804-42.644 20.006-56.318 33.044-13.673 13.038-13.966 23.152 0 29.253 13.966 6.101 19.359 6.397 31.592 8.337l-24.784 36.958c-9.75 14.381-16.797 21.749-17.155 44.012 1.804 6.553 4.024 7.196 8.489 7.073h58.176c5.278-.869 7.434-2.305 9.619-6.825 9.525-21.074 14.597-31.203 23.602-40.538 7.543 7.905 11.806 15.254 23.682 40.538 3.273 5.77 5.322 6.586 9.085 6.825h60.631c3.425-1.383 5.494-1.935 6.418-7.073-.052-15.196-3.794-23.075-16.541-44.012-10.713-14.146-15.764-22.292-24.679-36.958 6-.944 25.006-5.315 31.269-8.337 6.263-3.023 19.496-11.79 0-29.253-10.84-10.17-29.695-18.529-57.098-33.043Z"
          />
          <path
            id="primary"
            d="M135.671 44.31c-1.176-56.535-65.799-53.606-65.988 0-13.05 7.804-42.644 20.006-56.318 33.044-13.673 13.038-13.966 23.152 0 29.253 13.966 6.101 19.359 6.397 31.592 8.337l-24.784 36.958c-9.75 14.381-16.797 21.749-17.155 44.012 1.804 6.553 4.024 7.196 8.489 7.073h58.176c5.278-.869 7.434-2.305 9.619-6.825 9.525-21.074 14.597-31.203 23.602-40.538 7.543 7.905 11.806 15.254 23.682 40.538 3.273 5.77 5.322 6.586 9.085 6.825h60.631c3.425-1.383 5.494-1.935 6.418-7.073-.052-15.196-3.794-23.075-16.541-44.012-10.713-14.146-15.764-22.292-24.679-36.958 6-.944 25.006-5.315 31.269-8.337 6.263-3.023 19.496-11.79 0-29.253-10.84-10.17-29.695-18.529-57.098-33.043Z"
          />
          <rect id="table" width="400" height="75" />
          <text id="logo" x="25" y="175" width="400" fill="white">Table Talk</text>
          <text id="bgg" x="100" y="195" width="400" fill="white">Powered by BGG</text>
        </svg>

      </div>
    </div>
  );
}