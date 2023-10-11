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

// const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
//   const router = useRouter();
//   const registerModal = useRegisterModal();
//   const loginModal = useLoginModal();

//   const rentModal = useRentModal();
//   const [isOpen, setIsOpen] = useState(false);
//   const [openMenu, setOpenMenu] = useState(false);

//   // const toggleOpen = () => {
//   //   setMenu((value) => !value);
//   // };

//   const onRent = useCallback(() => {
//     if (!currentUser) {
//       return loginModal.onOpen();
//     }
//     //Open rent modal
//     rentModal.onOpen();
//   }, [loginModal, currentUser, rentModal]);

//   const onOpenMenu = () => setOpenMenu(true);
//   const onCloseMenu = () => setOpenMenu(false);

//   return (
//     <div className="flex flex-row items-center gap-3">
//       <div
//         onClick={onRent}
//         className="
//           hidden
//           md:block
//           text-sm
//           font-semibold
//           py-3
//           px-4
//           rounded-full
//           hover:bg-neutral-100
//           transition
//           cursor-pointer
//         "
//       >
//         Rentals
//       </div>{" "}
//       <div
//         onClick={onOpenMenu}
//         className="
//         p-4
//         md:py-1
//         md:px-2
//         border-[1px]
//         border-neutral-200
//         flex
//         flex-row
//         items-center
//         gap-3
//         rounded-full
//         cursor-pointer
//         hover:shadow-md
//         transition
//         "
//       >
//         <AiOutlineMenu />

//         <div className="hidden md:block">
//           <Avatar src={currentUser?.image} />
//         </div>
//       </div>
//       <Dialog
//         open={openMenu}
//         as="div"
//         className="relative z-40  "
//         onClose={onCloseMenu}
//       >
//         {/* Background color and opacity */}
//         {/* this div below can also be a self closing div */}
//         <div className="fixed inset-0 bg-black bg-opacity-25">
//           {/* Dialog position */}
//           <div className="fixed top-0 right-0 max-w-sm">
//             <Dialog.Panel className="flex flex-col w-full bg-white pt-4 ">
//               {/* Close button */}
//               <div className="flex items-center justify-end px-4">
//                 <div onClick={onCloseMenu}>
//                   <AiOutlineClose />
//                 </div>
//               </div>
//               {currentUser ? (
//                 <div className="p-3">
//                   <MenuItem
//                     label="My trips"
//                     onClick={() => router.push("/trips")}
//                   />
//                   <MenuItem
//                     label="My favorites"
//                     onClick={() => router.push("/favorites")}
//                   />
//                   <MenuItem
//                     label="My reservations"
//                     onClick={() => router.push("/reservations")}
//                   />
//                   <MenuItem
//                     label="My properties"
//                     onClick={() => router.push("/properties")}
//                   />
//                   <MenuItem label="Rentals" onClick={rentModal.onOpen} />
//                   <hr />
//                   <MenuItem label="Logout" onClick={() => signOut()} />
//                 </div>
//               ) : (
//                 <div className="p-3">
//                   <MenuItem label="Login" onClick={loginModal.onOpen} />
//                   <MenuItem label="Sign up" onClick={registerModal.onOpen} />
//                 </div>
//               )}
//             </Dialog.Panel>
//           </div>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default UserMenu;

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    //Open rent modal
    rentModal.onOpen();
  }, [loginModal, currentUser, rentModal]);

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div
            // onClick={onOpenMenu}
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
        </SheetTrigger>
        <SheetContent className="w-[200px] sm:w-[250px]">
          <SheetHeader>
            {/* <SheetTitle>Are you sure absolutely sure?</SheetTitle> */}
            <SheetDescription>
              {currentUser ? (
                <div className="p-3">
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
                </div>
              ) : (
                <div className="p-3">
                  <MenuItem label="Login" onClick={loginModal.onOpen} />
                  <MenuItem label="Sign up" onClick={registerModal.onOpen} />
                </div>
              )}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default UserMenu;
