import SubNavUsers from "@components/UserProfile/SubNavUsers/SubNavUsers";

export default function LoggedUsersLayout({ children }) {
  return (
    <main>
      <SubNavUsers />
      {children}
    </main>
  );
}
