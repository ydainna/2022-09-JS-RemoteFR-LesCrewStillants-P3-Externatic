import SubNavUsers from "../UserProfile/subNavUsers/SubNavUsers";

export default function LoggedUsersLayout({ children }) {
  return (
    <>
      <SubNavUsers />
      <main>{children}</main>
    </>
  );
}
