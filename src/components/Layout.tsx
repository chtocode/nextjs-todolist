import { Layout, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export type ILayoutProps = React.PropsWithChildren<{}>;

/**
 * @description Global layout component
 */
function ILayout(props: ILayoutProps): JSX.Element {
  const { children } = props;
  const { pathname, asPath} = useRouter();
  const menus: string[] = ["todo", "about"];
  const activeMenu = pathname.slice(1) || asPath.slice(1) || menus[0];

  return (
    <Layout>
      <Layout.Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[activeMenu]}>
          {menus.map(menu => (
            <Menu.Item key={menu}>
              <Link href={"/" + menu}>{menu}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Layout.Header>

      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
}

export default ILayout;
