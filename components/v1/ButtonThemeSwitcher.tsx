import type { FunctionComponent } from "react";

/**
 * ButtonThemeSwitcher is a React Component properties that passed to React Component ButtonThemeSwitcher
 */
type ButtonThemeSwitcher = {};

/**
 * ButtonThemeSwitcher is just yet another react component
 *
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 */
const ButtonThemeSwitcher: FunctionComponent<ButtonThemeSwitcher> = ({}) => {
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    const toggleTheme = () => {
        console.debug("Existing theme", localStorage.theme);
        if (localStorage.theme === "dark") {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
        } else {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
        }
        console.debug("Theme changed to", localStorage.theme);
    };

    return (
        <button
            className="rounded-full bg-gray-light-2 dark:bg-gray-dark-2 border border-gray-light-5 dark:border-gray-dark-5 flex items-center justify-center"
            style={{ height: "40px", width: "40px" }}
            onClick={toggleTheme}
        >
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-gray-light-12 dark:hidden"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0.5C8.27614 0.5 8.5 0.723858 8.5 1V3C8.5 3.27614 8.27614 3.5 8 3.5C7.72386 3.5 7.5 3.27614 7.5 3V1C7.5 0.723858 7.72386 0.5 8 0.5ZM2.6967 2.6967C2.89196 2.50144 3.20854 2.50144 3.40381 2.6967L4.81802 4.11091C5.01328 4.30617 5.01328 4.62276 4.81802 4.81802C4.62276 5.01328 4.30617 5.01328 4.11091 4.81802L2.6967 3.40381C2.50144 3.20854 2.50144 2.89196 2.6967 2.6967ZM1 7.5C0.723858 7.5 0.5 7.72386 0.5 8C0.5 8.27614 0.723858 8.5 1 8.5H3C3.27614 8.5 3.5 8.27614 3.5 8C3.5 7.72386 3.27614 7.5 3 7.5H1ZM2.6967 13.3033C2.50144 13.108 2.50144 12.7915 2.6967 12.5962L4.11091 11.182C4.30617 10.9867 4.62276 10.9867 4.81802 11.182C5.01328 11.3772 5.01328 11.6938 4.81802 11.8891L3.40381 13.3033C3.20854 13.4986 2.89196 13.4986 2.6967 13.3033ZM13 7.5C12.7239 7.5 12.5 7.72386 12.5 8C12.5 8.27614 12.7239 8.5 13 8.5H15C15.2761 8.5 15.5 8.27614 15.5 8C15.5 7.72386 15.2761 7.5 15 7.5H13ZM11.182 4.81802C10.9867 4.62276 10.9867 4.30617 11.182 4.11091L12.5962 2.6967C12.7915 2.50144 13.108 2.50144 13.3033 2.6967C13.4986 2.89196 13.4986 3.20854 13.3033 3.40381L11.8891 4.81802C11.6938 5.01328 11.3772 5.01328 11.182 4.81802ZM8.5 13C8.5 12.7239 8.27614 12.5 8 12.5C7.72386 12.5 7.5 12.7239 7.5 13V15C7.5 15.2761 7.72386 15.5 8 15.5C8.27614 15.5 8.5 15.2761 8.5 15V13ZM11.182 11.182C11.3772 10.9867 11.6938 10.9867 11.8891 11.182L13.3033 12.5962C13.4986 12.7915 13.4986 13.108 13.3033 13.3033C13.108 13.4986 12.7915 13.4986 12.5962 13.3033L11.182 11.8891C10.9867 11.6938 10.9867 11.3772 11.182 11.182ZM6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5Z"
                />
            </svg>
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden fill-gray-dark-12 dark:block"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.39961 1.0001C3.39961 0.779184 3.22052 0.600098 2.99961 0.600098C2.7787 0.600098 2.59961 0.779184 2.59961 1.0001V1.6001H1.99961C1.7787 1.6001 1.59961 1.77918 1.59961 2.0001C1.59961 2.22101 1.7787 2.4001 1.99961 2.4001H2.59961V3.0001C2.59961 3.22101 2.7787 3.4001 2.99961 3.4001C3.22052 3.4001 3.39961 3.22101 3.39961 3.0001V2.4001H3.99961C4.22052 2.4001 4.39961 2.22101 4.39961 2.0001C4.39961 1.77918 4.22052 1.6001 3.99961 1.6001H3.39961V1.0001ZM6.39961 4.0001C6.39961 3.77918 6.22052 3.6001 5.99961 3.6001C5.7787 3.6001 5.59961 3.77918 5.59961 4.0001V4.6001H4.99961C4.7787 4.6001 4.59961 4.77918 4.59961 5.0001C4.59961 5.22101 4.7787 5.4001 4.99961 5.4001H5.59961V6.0001C5.59961 6.22101 5.7787 6.4001 5.99961 6.4001C6.22052 6.4001 6.39961 6.22101 6.39961 6.0001V5.4001H6.99961C7.22052 5.4001 7.39961 5.22101 7.39961 5.0001C7.39961 4.77918 7.22052 4.6001 6.99961 4.6001H6.39961V4.0001ZM2.39961 7.0001C2.39961 6.77918 2.22052 6.6001 1.99961 6.6001C1.7787 6.6001 1.59961 6.77918 1.59961 7.0001V7.6001H0.999609C0.778695 7.6001 0.599609 7.77918 0.599609 8.0001C0.599609 8.22101 0.778695 8.4001 0.999609 8.4001H1.59961V9.0001C1.59961 9.22101 1.7787 9.4001 1.99961 9.4001C2.22052 9.4001 2.39961 9.22101 2.39961 9.0001V8.4001H2.99961C3.22052 8.4001 3.39961 8.22101 3.39961 8.0001C3.39961 7.77918 3.22052 7.6001 2.99961 7.6001H2.39961V7.0001ZM9.04369 1.48196L8.74582 1.44171C8.53238 1.4178 8.40655 1.66562 8.52899 1.84206C8.66976 2.04491 8.79945 2.25604 8.91718 2.47457C9.41842 3.40497 9.70285 4.46944 9.70285 5.60034C9.70285 8.87213 7.3221 11.5879 4.1985 12.1098C3.95699 12.1501 3.70951 12.1773 3.45972 12.1907C3.24526 12.2021 3.12693 12.4536 3.27685 12.6073C3.34514 12.6774 3.41498 12.746 3.4863 12.813L3.55847 12.8797L3.81846 13.1046L4.00647 13.2533L4.12759 13.3434L4.31454 13.4744L4.49042 13.5891C4.61138 13.6653 4.73499 13.7376 4.8612 13.8061L5.1246 13.9413L5.38516 14.0608L5.688 14.183L5.93133 14.2687C6.06527 14.3129 6.20112 14.353 6.3382 14.3886C6.44225 14.4157 6.5473 14.4402 6.65368 14.4623C6.77957 14.4885 6.90677 14.511 7.03508 14.5299L7.35205 14.5687L7.61897 14.5894C7.746 14.5966 7.874 14.6003 8.00285 14.6003C11.6479 14.6003 14.6028 11.6454 14.6028 8.00035C14.6028 7.75056 14.589 7.50401 14.5619 7.26143L14.5251 6.98419C14.4906 6.76095 14.4449 6.54141 14.3887 6.32654C14.321 6.06721 14.2378 5.8141 14.1406 5.56894L14.0276 5.30144L13.9503 5.13554L13.8762 4.98678C13.7174 4.67785 13.5349 4.38307 13.3308 4.10435L13.1778 3.90365L12.9789 3.66444L12.8154 3.48373L12.6958 3.35963L12.5351 3.20258L12.313 3.00196L11.9922 2.74203L11.748 2.56511L11.4558 2.37458L11.1342 2.18907L10.8069 2.02391L10.6934 1.97188L10.4545 1.87072L10.1775 1.76702L9.92529 1.68472L9.60038 1.59502L9.33562 1.53498L9.04369 1.48196ZM10.9029 5.80035C10.9029 4.776 10.6998 3.79841 10.3321 2.90616C12.262 3.79007 13.6028 5.73874 13.6028 8.00035C13.6028 11.0931 11.0956 13.6003 8.00285 13.6003C7.1361 13.6003 6.3156 13.4037 5.58318 13.0523C7.04154 12.5942 8.31044 11.7083 9.24285 10.5417C9.37926 10.7285 9.59992 10.8498 9.84891 10.8498C10.2631 10.8498 10.5989 10.514 10.5989 10.0998C10.5989 9.74269 10.3493 9.44385 10.015 9.36828C10.077 9.25177 10.1362 9.13346 10.1922 9.01344C10.3832 9.13175 10.6084 9.20005 10.8496 9.20005C11.5399 9.20005 12.0996 8.6404 12.0996 7.95005C12.0996 7.25989 11.5403 6.70036 10.8502 6.70005C10.885 6.40499 10.9029 6.10476 10.9029 5.80035Z"
                />
            </svg>
        </button>
    );
};

export default ButtonThemeSwitcher;
