import SubNavUsers from "@components/UserProfile/subNavUsers/SubNavUsers";

export default function LoggedUsersLayout({ children }) {
  return (
    <>
      <SubNavUsers />
      <main>{children}</main>
    </>
  );
}
