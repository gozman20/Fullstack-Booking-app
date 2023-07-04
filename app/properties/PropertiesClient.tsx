// "use client";
// import { useRouter } from "next/navigation";
// import Container from "../components/Container";
// import Heading from "../components/Heading";
// import { SafeListing, SafeUser } from "../types";
// import { useCallback, useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import ListingCard from "../components/listings/ListingCard";

// interface PropertiesProps {
//   listings: SafeListing[];
//   currentUser: SafeUser | null;
// }

// const PropertiesClient: React.FC<PropertiesProps> = ({
//   listings,
//   currentUser,
// }) => {
//   const router = useRouter();
//   const [deleteId, setDeleteId] = useState("");

//   const onCancel = useCallback(
//     (id: string) => {
//       setDeleteId(id);

//       axios
//         .delete(`/api/listings/${id}`)
//         .then(() => {
//           toast.success("Listing Cancelled");
//           router.refresh();
//         })
//         .catch((error) => {
//           toast.error(error?.response?.data?.error);
//         })
//         .finally(() => {
//           setDeleteId("");
//         });
//     },
//     [router]
//   );
//   return (
//     <Container>
//       <Heading subtitle="List of your properties" title="Properties" />
//       <div
//         className="
//         mt-10
//         gap-6
//        grid grid-cols-1
//        sm:grid-cols-2
//        md:grid-cols-3
//        lg:grid-cols-4
//        xl:grid-cols-5
//        2xl:grid-cols-6"
//       >
//         {listings.map((listing) => (
//           <ListingCard
//             key={listing.id}
//             data={listing}
//             actionId={listing.id}
//             onAction={onCancel}
//             disabled={deleteId === listing.id}
//             actionLabel="Delete Property"
//             currentUser={currentUser}
//           />
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default PropertiesClient;
