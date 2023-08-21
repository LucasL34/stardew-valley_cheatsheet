import s from "_components/section/section.module.css";
import FishCard from "_components/cards/FishCard";

export interface Sections<T = unknown> {
  id: number | string;
  icon: React.JSX.Element | null;
  title: string;
  items: T[];
  showIcon?: boolean;
  loading?: boolean;
  key: number | string;
}

function Section(props: Sections) {
  const { icon, title, items } = props;

  return (
    <>
      <div className={s.section}>
        <div className={s.titleSection}>
          {/* Icon */}
          <h4 className={s.title}>{title}</h4>
        </div>

        <div className={s.cards}>
          {items.map((item) => {
            // TODO dynamic component card
            return <FishCard key={item.key} {...item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Section;
