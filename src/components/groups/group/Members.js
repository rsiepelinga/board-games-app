/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Members(props) {
  let isLoading = true;

  if (props && props.group && props.group.members) {
    isLoading = false;
  }

  if (!isLoading) {
    return (
      <div className="full-screen">
        <h5>Members</h5>
        <div className="display-grid">
          {props.group.members.map((mem) => (
            <div className="member-tile">
              <a href={`/collection/${mem}`}>
                <div className="meeple">
                  <svg viewBox="0 0 142 154" xmlns="http://www.w3.org/2000/svg">
                    <path d="m70.78 0c-8.8067 0-15.14 5.4413-18.798 12.275-3.2715 6.1116-4.6326 13.201-4.8981 19.409-9.9835 5.7643-21.043 11.576-29.948 17.517-4.6708 3.1166-8.743 6.2514-11.808 9.6205-3.0654 3.3683-5.327 7.1617-5.327 11.637 0 1.9043 0.79586 3.4563 1.6928 4.5951 0.89828 1.1387 1.9746 2.0231 3.2004 2.8488 2.4512 1.6514 5.5417 3.0278 8.941 4.2184 5.0501 1.7695 10.706 3.0849 15.624 3.6475-4.8913 9.8414-11.401 18.881-17.107 27.542-6.5942 10.009-12.351 19.609-12.351 30.273 0 1.523-0.014351 2.713 0.10111 3.908 0.11579 1.194 0.40967 2.686 1.4384 3.868 1.0291 1.182 2.2888 1.499 3.3149 1.63 1.0261 0.131 2.0598 0.115 3.3857 0.115h36.382c2.641 0 4.5749 0.188 6.5642-1.306 1.9897-1.493 2.7151-3.532 4.1326-6.579l0.0287-0.061 0.0261-0.063s3.1714-7.53 6.9553-15.002c1.8918-3.735 3.9457-7.455 5.7321-10.092 0.8938-1.317 1.7301-2.363 2.3322-2.953 0.1839-0.18 0.2674-0.213 0.3862-0.289 0.1184 0.076 0.2022 0.109 0.3861 0.289 0.6022 0.59 1.4385 1.636 2.3322 2.953 1.7864 2.637 3.8403 6.357 5.7321 10.092 3.7836 7.472 6.9553 15.001 6.9553 15.001l0.0261 0.063 0.0287 0.061c1.4176 3.047 2.1364 5.074 4.113 6.571 1.976 1.497 3.9056 1.314 6.5095 1.314h36.542c1.305 0 2.322 0.017 3.341-0.115 1.019-0.133 2.283-0.461 3.301-1.65s1.299-2.665 1.412-3.855c0.114-1.189 0.1-2.378 0.1-3.901 0-10.664-5.757-20.264-12.351-30.274-5.706-8.661-12.215-17.7-17.107-27.542 4.918-0.5629 10.574-1.8776 15.624-3.6471 3.399-1.1901 6.49-2.567 8.941-4.218 1.226-0.8257 2.302-1.71 3.2-2.8488s1.693-2.6908 1.693-4.5951c0-4.4751-2.262-8.2684-5.327-11.637-3.065-3.3691-7.137-6.504-11.808-9.6206-8.905-5.9414-19.964-11.753-29.948-17.517-0.2655-6.208-1.6269-13.298-4.8981-19.409-3.658-6.8341-9.9916-12.275-18.798-12.275z" fill="#FFFFFF" />
                  </svg>
                </div>
                <p className="member-tile__text">{mem}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Members;