import SubNavSpecialUsers from "@components/ManagementsPages/subNavUsers/SubNavSpecialUsers";

export default function SpecialUsersLayout({ children }) {
  return (
    <>
      <SubNavSpecialUsers />
      <main>{children}</main>
    </>
  );
}
