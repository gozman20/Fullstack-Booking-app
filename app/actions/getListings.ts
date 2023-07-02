import prisma from "@/app/libs/prismadb";

interface IListingsparams {
  userId?: string;
}

export default async function getListings(params: IListingsparams) {
  // if there is a params, use the params and fetch the Listings, else fetch all listings

  try {
    const { userId } = params;

    let query: any = {};
    if (userId) {
      query.userId = userId;
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const Safelistings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
    return Safelistings;
  } catch (error: any) {
    throw new Error(error);
  }
}
