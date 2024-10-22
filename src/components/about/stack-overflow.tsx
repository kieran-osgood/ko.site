type StackOverflowStats = {
  badge_counts: Record<"bronze" | "silver" | "gold", number>;
  account_id: number;
  is_employee: boolean;
  last_modified_date: number;
  last_access_date: number;
  reputation_change_year: number;
  reputation_change_quarter: number;
  reputation_change_month: number;
  reputation_change_week: number;
  reputation_change_day: number;
  reputation: number;
  creation_date: number;
  user_type: "registered";
  user_id: number;
  location: string;
  website_url: string;
  link: string;
  profile_image: string;
  display_name: string;
};

type StackOverflowProps = {
  items: Array<StackOverflowStats>;
};
export default function StackOverflow(props: StackOverflowProps) {
  if (!props.items[0]) return null;

  const [{ reputation, badge_counts, link }] = props.items;

  return (
    <>
      <div className="flex justify-between pt-8">
        <div className="text-primary-text ">
          <h2 className="text-xs text-secondary-text">Stack Overflow</h2>

          <p className="font-bold text-sm pt-8">
            Reputation
            <span className="text-sm font-normal">
              &nbsp;-&nbsp;{reputation}
            </span>
          </p>
        </div>
        <Badges badgeCounts={badge_counts} />
      </div>
      <div className=" pt-8 pb-4">
        <a
          href={link}
          className="text-xs text-secondary-text underline block truncate"
          target="_blank"
          rel="noreferrer"
        >
          {link}
        </a>
      </div>
    </>
  );
}

type BadgesProps = {
  badgeCounts: StackOverflowStats["badge_counts"];
};
const Badges = ({ badgeCounts }: BadgesProps) => (
  <div className="flex flex-wrap" aria-hidden="true">
    <Badge color="#ab825f" count={badgeCounts.bronze} />
    <Badge color="#b4b8bc" count={badgeCounts.silver} />
    <Badge color="#ffcc01" count={badgeCounts.gold} />
  </div>
);

type BadgeProps = {
  color: string;
  count: number;
};
const Badge = ({ color, count }: BadgeProps) => (
  <div className="px-1 ml-auto" style={{ color: color }}>
    <span>●</span>
    <span className="pl-1">{count}</span>
  </div>
);
