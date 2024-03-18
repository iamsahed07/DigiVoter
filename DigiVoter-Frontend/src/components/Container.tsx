
export const Container = ({tailClasses,children,shadowSize}) => {
    return (
      <div className={` bg-white shadow-${shadowSize} w-[100%] ${tailClasses} flex flex-col`} >
          {children}
      </div>
    )
  }
