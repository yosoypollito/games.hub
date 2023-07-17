const RPSIcon = () => {
  return (
    <div className="relative [&_div>svg]:w-10 [&_div>svg]:h-10 flex flex-row">

      {/* Scissors */}
      <div className="relative top-1/2 -translate-y-1/2 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g transform="translate(0,0)"><path d="M204.902 160.246c-5.972.13-11.88 1.138-17.752 2.832-27.015 7.795-53.963 32.7-75.966 60.47a9 9 0 0 1-6.8 3.407l-69.253 1.97-.253-8.943-.018.002-.85 114.86 74.412.095a9 9 0 0 1 8.97 8.402c-.075-1.108 1.74 3.838 6.174 8.623 4.435 4.785 10.74 10.224 17.266 14.94 5.005 3.62 10.184 6.83 14.64 9.115.036-1.62.186-3.224.434-4.776 1.223-7.632 4.523-15.054 8.897-21.765 4.373-6.713 9.798-12.694 16.252-16.837 4.025-2.585 8.888-4.538 13.933-4.756 7.334-15.483 18.572-34.855 42.817-41.547 1.444-.4 2.48-.502 3.33-.48.848.02 1.51.166 2.203.265.41.06.805.144 1.205.22-12.94-12.258-21.842-26.238-28.496-40.837-13.878 27.166-40.78 43.774-63.05 55.62l-8.45-15.894c27.485-14.618 56.812-33.796 61.986-68.01a9 9 0 0 1 17.488-1.337c7.503 24.018 17.674 45.35 38.63 62.396 8.675 4.772 23.866 1.712 29.88-15.262-6.092-22.897-9.235-39.687-19.975-61.64-24.177-30.83-46.322-41.594-67.653-41.134zm223.19 19.807c-4.44.05-9.442.51-14.994 1.5L294.773 206.97c5.792 14.422 8.966 27.285 12.49 41.184 6.443-1.353 28.548-5.998 54.508-11.513 15.013-3.19 30.158-6.427 41.8-8.958 5.82-1.266 10.77-2.355 14.364-3.168 1.796-.407 3.258-.746 4.287-.994.765-.185 1.58-.44 1.548-.416 12.818-4.623 21.502-10.793 26.402-16.57 4.948-5.83 5.98-10.82 5.242-14.368-.738-3.548-3.162-6.923-9.892-9.523-4.2-1.623-10.03-2.674-17.428-2.59zm-117.8 86.967c-5.612 18.07-19.827 28.805-34.5 30.886 2.103.942 4.218 1.908 6.32 2.895 8.66 4.067 17.03 8.38 23.474 12.36 1.583.978 3.04 1.92 4.393 2.877 47.003 6.104 102.48 8.05 137.41 5.172 7.462-.616 11.91-3.012 14.387-5.564 2.477-2.55 3.398-5.367 3.05-8.94-.693-7.148-8.034-17.736-26.063-22.567-19.776-5.3-49.118-9.882-75.577-12.93-21.77-2.506-42-3.942-52.894-4.19zm-68.81 37.082c-15.446 4.734-22.93 16.487-29.154 29.4l57.852 29.73c2.502 1.082 4 .894 6.99-.753 3.02-1.666 6.802-5.25 10.228-9.757 5.547-7.297 9.667-16.036 12.07-21.897-1.042-.763-1.74-1.362-3.34-2.35-5.423-3.35-13.42-7.51-21.667-11.382-8.246-3.873-16.812-7.504-23.49-9.983-3.34-1.238-6.233-2.19-8.185-2.715-.634-.17-.927-.217-1.303-.293zm-45.564 41.722c-.318-.025-.7-.002-1.168.102-.95.21-2.23.748-3.97 1.865-3.48 2.234-7.666 6.558-10.897 11.517-3.232 4.958-5.53 10.575-6.203 14.785-.675 4.21.093 6.007.888 6.77.166.158 4.185 2.892 9.323 5.35 5.138 2.456 11.7 5.17 18.594 7.65 13.19 4.752 28 8.44 35.434 8.833 10.002-2.946 14.492-6.77 16.865-10.988 1.98-3.522 2.727-8.188 2.492-13.984l-60.584-31.71c-.202-.09-.454-.163-.772-.19z" fill="#fff" fill-opacity="1"></path></g></svg>
      </div>
      {/* ROCK */}
      <div className="relative top-1/2 -translate-y-1/2 left-0 -scale-x-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><g transform="translate(0,0)"><path d="M291.28 113.14c-21.105-.197-46.504 4.78-76.186 15.538l-61.31 97.62a9 9 0 0 1-7.57 4.214l-105.65.613.278 118.38 94.486.743a9 9 0 0 1 8.53 6.354c7.957 25.855 26.634 40.548 49.097 49.65 18.63 7.55 39.57 10.712 57.074 11.95-.924-9.667-.874-20.846 1.69-31.51 1.845-7.666 5.07-15.214 10.843-21.23 4.665-4.864 11.064-8.425 18.566-9.9-2.417-8.75-1.9-17.564.358-25.414 3.358-11.673 9.468-22.114 14.11-31.853a9 9 0 0 1 .002-.025c.904-8.89.39-20.137 2.015-30.924.813-5.394 2.175-10.806 5.143-15.803 1.907-3.21 4.615-6.177 7.955-8.473l-11.76-29.533c-7.754 29.296-23.77 49.333-40.265 62.213-11.166 8.717-22.448 14.333-31.495 17.992-9.046 3.66-16.89 5.758-17.437 5.955l-6.104-16.933c3.808-1.373 8.865-2.503 16.79-5.71 7.927-3.205 17.69-8.092 27.167-15.49 18.955-14.8 37.084-39.063 38.16-83.08a9 9 0 0 1 17.36-3.11l26.15 65.67c13.382 6.284 22.786 6.51 31.265 3.968 7.728-2.317 15.188-7.56 23.012-13.512-3.2-26.703-10.97-53.765-21.06-81.12-12.893-20.23-30.257-31.92-54.5-35.87-5.236-.853-10.81-1.314-16.718-1.37zm128.425 34.286l-37.166 5.428c8.478 24.046 15.285 48.305 18.58 72.832 25.347 4.217 36.318-.862 54.722-5.698 5.58-20.544 7.754-38.29 3.863-49.715-2.1-6.165-5.503-10.796-11.75-14.734-6.097-3.844-15.258-6.83-28.25-8.114zm33.604 91.8c-15.195 4.203-30.293 8.315-55.456 4.157-9.19 7.16-19.212 14.996-32.14 18.87-12.515 3.753-27.416 3.04-44.187-4.792-1.482.74-2.348 1.687-3.293 3.276-1.194 2.01-2.206 5.216-2.82 9.29-.93 6.17-1.052 14.123-1.467 22.267 42.27 11.538 84.406 18.628 126.424 19.78 10.864-8.28 18.62-17.718 21.59-28.792 3.073-11.467 1.617-25.51-8.65-44.055zm-143.34 70.797c-4.47 9.197-9.032 17.62-11.183 25.1-2.734 9.505-2.687 16.425 5.14 25.7 30.633 19.38 65.708 25.593 102.438 30.464 12.98-8.606 24.286-17.244 29.422-26.133 5.3-9.17 6.31-18.654-3.71-35.334-40.81-1.786-81.518-8.768-122.106-19.797zm-19.943 62.38a9 9 0 0 1-2.386.44c-5.964.33-9.28 2.154-12.087 5.08-2.806 2.924-4.992 7.41-6.332 12.98-2.308 9.597-1.81 21.784-.493 31.19 29.334 14.184 59.095 25.29 93.064 26.41 19.342-4.057 26.193-10.234 30.187-17.71 3.1-5.802 4.263-13.514 5.814-22.45-35.73-4.915-72.027-11.895-104.85-33.11a9 9 0 0 1-1.852-1.592c-.364-.41-.716-.823-1.06-1.238z" fill="#fff" fill-opacity="1"></path></g></svg>
      </div>

    </div>
  )
}
const CollectionItem = ({ children }: { children: React.ReactNode }) => {

  return (
    <li
      className="flex flex-col items-center justify-center rounded-md shadow-sm bg-light-blue text-black 
      dark:text-white dark:bg-red p-4 w-[100px] text-center font-semibold
      transition-all hover:scale-105 hover:shadow-md dark:shadow-red/50 text-xs">
      {children}
    </li>
  )
}
export default function Collection() {

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,100px)] justify-center gap-4">
      <CollectionItem>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g transform="translate(0,0)" ><path d="M169.344 35.844A9.5 9.5 0 0 0 160 45.47v117.343H45.5a9.5 9.5 0 1 0 0 19H160v151H45.5a9.5 9.5 0 1 0 0 19H160V466.5a9.5 9.5 0 1 0 19 0V351.812h151V466.5a9.5 9.5 0 1 0 19 0V351.812h117.406a9.5 9.5 0 1 0 0-19H349v-151h115.563a9.5 9.5 0 1 0 0-19H349V45.47a9.5 9.5 0 0 0-9.656-9.626A9.5 9.5 0 0 0 330 45.47v117.343H179V45.47a9.5 9.5 0 0 0-9.656-9.626zM86 35.97c-13.07 0-25.77 4.94-35.156 13.843C41.458 58.715 36 71.06 36 83.874c0 12.814 5.458 25.16 14.844 34.063C60.23 126.84 72.93 131.81 86 131.81c13.07 0 25.77-4.97 35.156-13.875C130.542 109.034 136 96.69 136 83.876c0-12.814-5.458-25.16-14.844-34.063C111.77 40.91 99.07 35.97 86 35.97zm170 0c-13.07 0-25.77 4.94-35.156 13.843C211.458 58.715 206 71.06 206 83.874c0 12.814 5.458 25.16 14.844 34.063C230.23 126.84 242.93 131.81 256 131.81c13.07 0 25.77-4.97 35.156-13.875C300.542 109.034 306 96.69 306 83.876c0-12.814-5.458-25.16-14.844-34.063C281.77 40.91 269.07 35.97 256 35.97zm138.844 9.218A9.5 9.5 0 0 0 388.25 61.5l22.375 22.375L389 105.5a9.502 9.502 0 1 0 13.438 13.438l21.625-21.626 22.375 22.407a9.502 9.502 0 1 0 13.437-13.44L437.5 83.876l21.625-21.625a9.5 9.5 0 0 0-6.906-16.313 9.5 9.5 0 0 0-6.533 2.876l-21.625 21.624-22.375-22.374a9.5 9.5 0 0 0-6.843-2.876zM86 54.968c8.137 0 16.485 3.337 22.094 8.657 5.608 5.32 8.937 12.95 8.937 20.25 0 7.3-3.328 14.96-8.936 20.28-5.61 5.32-13.957 8.626-22.094 8.626s-16.485-3.304-22.094-8.624c-5.608-5.32-8.937-12.98-8.937-20.28 0-7.302 3.328-14.93 8.936-20.25 5.61-5.32 13.957-8.657 22.094-8.657zm170 0c8.137 0 16.485 3.337 22.094 8.657 5.608 5.32 8.937 12.95 8.937 20.25 0 7.3-3.328 14.96-8.936 20.28-5.61 5.32-13.957 8.626-22.094 8.626s-16.485-3.304-22.094-8.624c-5.608-5.32-8.937-12.98-8.937-20.28 0-7.302 3.328-14.93 8.936-20.25 5.61-5.32 13.957-8.657 22.094-8.657zm-77 126.844h151v151H179v-151zm245.063 26.282c-13.07 0-25.77 4.94-35.157 13.844-9.386 8.903-14.844 21.248-14.844 34.062 0 12.814 5.458 25.16 14.844 34.063 9.386 8.903 22.087 13.875 35.156 13.875 13.07 0 25.77-4.972 35.157-13.875 9.385-8.904 14.842-21.25 14.842-34.063 0-12.814-5.457-25.16-14.843-34.063-9.387-8.903-22.088-13.843-35.158-13.843zm-197.25 9.22a9.5 9.5 0 0 0-6.625 16.31L242.563 256l-21.625 21.625a9.502 9.502 0 1 0 13.437 13.438L256 269.438l22.375 22.375a9.502 9.502 0 1 0 13.438-13.438L269.438 256l21.625-21.625a9.5 9.5 0 0 0-6.907-16.313 9.5 9.5 0 0 0-6.53 2.875L256 242.563l-22.375-22.375a9.5 9.5 0 0 0-6.813-2.875zm197.25 9.78c8.136 0 16.485 3.305 22.093 8.625 5.61 5.32 8.938 12.98 8.938 20.28 0 7.3-3.33 14.93-8.938 20.25-5.608 5.32-13.957 8.656-22.094 8.656-8.136 0-16.485-3.336-22.093-8.656-5.61-5.32-8.94-12.95-8.94-20.25 0-7.3 3.33-14.96 8.94-20.28 5.607-5.32 13.956-8.626 22.092-8.626zM256 380.156c-13.07 0-25.77 4.94-35.156 13.844-9.386 8.903-14.844 21.25-14.844 34.063 0 12.813 5.458 25.19 14.844 34.093C230.23 471.06 242.93 476.03 256 476.03c13.07 0 25.77-4.97 35.156-13.874 9.386-8.903 14.844-21.28 14.844-34.094 0-12.813-5.458-25.16-14.844-34.062-9.386-8.903-22.087-13.844-35.156-13.844zm-199.188 9.22a9.5 9.5 0 0 0-6.624 16.312l22.374 22.406L50.94 449.72a9.502 9.502 0 1 0 13.437 13.436L86 441.53l22.375 22.376a9.502 9.502 0 1 0 13.438-13.437l-22.376-22.376 21.626-21.625a9.5 9.5 0 0 0-6.907-16.314 9.5 9.5 0 0 0-6.53 2.875L86 414.657 63.625 392.25a9.5 9.5 0 0 0-6.813-2.875zM256 399.187c8.137 0 16.485 3.304 22.094 8.625 5.608 5.32 8.937 12.948 8.937 20.25 0 7.3-3.328 14.96-8.936 20.28-5.61 5.32-13.957 8.626-22.094 8.626s-16.485-3.306-22.094-8.626c-5.608-5.32-8.937-12.98-8.937-20.28 0-7.303 3.328-14.93 8.936-20.252 5.61-5.32 13.957-8.625 22.094-8.625z" fill="#fff" fill-opacity="1"></path></g></svg>
        Tic Tac Toe
      </CollectionItem>

      <CollectionItem>
        <RPSIcon />
        Rock paper scissors
      </CollectionItem>

      <CollectionItem>
        Soon...
      </CollectionItem>
    </ul>
  )
}