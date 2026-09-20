// HERO BUTTON
export const HeroButton = ({ link, target, icon, title, onClick }) => {
  const className = "px-3 py-1.5 flex justify-center items-center gap-2 font-base text-black dark:text-white rounded hover:bg-gray-100 dark:hover:bg-neutral-900 shadow shadow-black dark:shadow-white transition-all duration-300 active:shadow-none active:scale-95";
  
  if (onClick || !link) {
    return (
      <button onClick={onClick} className={className}>
        {icon}
        {title}
      </button>
    );
  }

  return (
    <a
      href={link}
      target={target}
      className={className}
    >
      {icon}
      {title}
    </a>
  );
};
