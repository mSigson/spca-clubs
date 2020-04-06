import { UserProvider } from "../utils/user";

const Layout = ({ user, loading = false, children }) => (
  <UserProvider value={{ user, loading }}>
    <main>
      <div className="container">{children}</div>
    </main>

    <style jsx>{`
      .container {
        max-width: 42rem;
        margin: 1.5rem auto;
      }
    `}</style>
    <style jsx global>{`
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, "Segoe UI";
      }
    `}</style>
  </UserProvider>
);

export default Layout;
