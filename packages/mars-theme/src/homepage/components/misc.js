import { css, connect, useConnect, styled } from "frontity";
import tw from "tailwind.macro";
import Link from "@frontity/components/link";

/**
 * The MarsLink component, which is a wrapper on top of the {@link Link}
 * component.
 *
 * @param props - It accepts the same props than the {@link Link} component.
 *
 * @example
 * ```js
 * <MarsLink link="/some-post">
 *   <div>Some Post</div>
 * </MarsLink>
 * ```
 *
 * @returns A {@link Link} component, which returns an HTML anchor element.
 */
const DroneLinkLegit = ({ children, ...props }) => {
  const { state, actions } = useConnect();
  /**
   * A handler that closes the mobile menu when a link is clicked.
   */
  const onClick = () => {};
  return (
    <Link {...props} onClick={onClick}>
      {children}
    </Link>
  );
};

const DroneLinkMock = ({ children, link, ...props }) => {
  /**
   * A handler that closes the mobile menu when a link is clicked.
   */
  const onClick = () => {};
  return (
    <a href={link} onClick={onClick}>
      {children}
    </a>
  );
};
// const Linker = connect(DroneLinkMock, { injectProps: false });
const Linker = DroneLinkMock;
export { Linker };
