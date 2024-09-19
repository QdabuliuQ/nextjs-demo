function Layout({children}: {children: React.ReactNode}) {
    return (
      <div>
        Layout
        <div>{children}</div>
      </div>
    );
}

export default Layout;