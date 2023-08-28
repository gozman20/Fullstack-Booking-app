"use client";
import { useState, useCallback, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "../hooks/useRegisterModal";
import useLoginModal from "../hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import useRentModal from "../hooks/useRentModal";
import { useRouter } from "next/navigation";
import { Dialog } from "@headlessui/react";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // const toggleOpen = () => {
  //   setMenu((value) => !value);
  // };

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    //Open rent modal
    rentModal.onOpen();
  }, [loginModal, currentUser, rentModal]);

  const onOpenMenu = () => setOpenMenu(true);
  const onCloseMenu = () => setOpenMenu(false);

  return (
    <div className="flex flex-row items-center gap-3">
      <div
        onClick={onRent}
        className="
          hidden
          md:block
          text-sm
          font-semibold
          py-3
          px-4
          rounded-full
          hover:bg-neutral-100
          transition
          cursor-pointer
        "
      >
        Rentals
      </div>{" "}
      <div
        onClick={onOpenMenu}
        className="
        p-4
        md:py-1
        md:px-2
        border-[1px]
        border-neutral-200
        flex
        flex-row
        items-center
        gap-3
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition
        "
      >
        <AiOutlineMenu />

        <div className="hidden md:block">
          <Avatar src={currentUser?.image} />
        </div>
      </div>
      <Dialog
        open={openMenu}
        as="div"
        className="relative z-40 "
        onClose={onCloseMenu}
      >
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog position */}
        <div
          className="fixed inset-
         text-sm
                
              
        z-40 flex top-0 right-0"
        >
          <Dialog.Panel
            className="relative ml-auto
           flex  w-full max-w-xs flex-col
            overflow-y- bg-white py-4 pb-6 shadow-xl"
          >
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <div onClick={onCloseMenu}>
                <AiOutlineClose />
              </div>
            </div>
            {currentUser ? (
              <>
                <MenuItem
                  label="My trips"
                  onClick={() => router.push("/trips")}
                />
                <MenuItem
                  label="My favorites"
                  onClick={() => router.push("/favorites")}
                />
                <MenuItem
                  label="My reservations"
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem
                  label="My properties"
                  onClick={() => router.push("/properties")}
                />
                <MenuItem label="Rentals" onClick={rentModal.onOpen} />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem label="Sign up" onClick={registerModal.onOpen} />
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default UserMenu;
