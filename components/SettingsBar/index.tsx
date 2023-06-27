import { useRouter } from "next/router";
import SettingsBarItem from "./Item";
import SettingsSearch from "./Search";

const barItems = [
  {
    itemName: "Account",
    iconName: "account_circle",
    route: "/account",
  },
  {
    itemName: "Notification",
    iconName: "notifications",
    route: "/notification",
  },
  {
    itemName: "Data Privacy",
    iconName: "lock_person",
    route: "/dataPrivacy",
  },
  {
    itemName: "Language and localization",
    iconName: "language",
    route: "/languageLocalization",
  },
  {
    itemName: "Theme and appearance",
    iconName: "dark_mode",
    route: "/themeAppearance",
  },
  {
    itemName: "Accessibility Options",
    iconName: "swipe",
    route: "/accessibilityOptions",
  },
  {
    itemName: "Learning preferences",
    iconName: "local_library",
    route: "/learningPreferences",
  },
  {
    itemName: "Payment and billing",
    iconName: "receipt_long",
    route: "/paymentBilling",
  },
];

const SettingsBar = ({ activeItem }: { activeItem: Number }) => {
  const router = useRouter();

  return (
    <div className="p-4 pt-6 flex flex-col bg-white border border-1 rounded-lg h-full font-medium gap-5">
      {/* Search bar component */}
      <SettingsSearch />
      {/* Menu items components */}
      {barItems.map((item, index) => {
        return (
          <SettingsBarItem
            key={index}
            itemName={item.itemName}
            iconName={item.iconName}
            isActive={index === activeItem ? true : false}
            onClick={() => {
              router.push("/settings" + item.route);
            }}
          />
        );
      })}
    </div>
  );
};

export default SettingsBar;
