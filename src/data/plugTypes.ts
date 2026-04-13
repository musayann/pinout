export interface PlugType {
  type: string;
  name: string;
  pins: string;
  grounded: boolean;
  ratedCurrent: string;
  description: string;
  compatibility: string;
  whereFound: string;
}

export const plugTypes: PlugType[] = [
  {
    type: "C",
    name: "Europlug",
    pins: "2 round pins, 4.0 mm diameter, 19 mm spacing",
    grounded: false,
    ratedCurrent: "2.5 A",
    description:
      "The Europlug is listed for Rwanda because it is physically compatible with Type E sockets, and there are no dedicated Type C-only sockets installed in Rwanda. However, the Type C plug is widely used in practice: its compact, ungrounded two-pin design is the standard for low-power devices like phone chargers, laptops, and small appliances, and it fits directly into the Type E sockets found across the country.",
    compatibility: "Fits into Type E (and Type F) sockets",
    whereFound:
      "No dedicated Type C sockets exist in Rwanda. Type C plugs are used everywhere via compatibility with Type E sockets, making them the most common plug type encountered in daily life.",
  },
  {
    type: "E",
    name: "French Plug",
    pins: "2 round pins, 4.8 mm diameter + ground pin on socket",
    grounded: true,
    ratedCurrent: "16 A",
    description:
      "The Type E system features a grounding pin that protrudes from the socket face, connecting with a hole in the plug. No longer the official standard since Rwanda adopted Type G as part of the East African Community, Type E remains the most widespread grounded socket in older buildings across the country, a legacy of Belgian colonial electrical infrastructure.",
    compatibility: "Accepts Type C and Type E plugs",
    whereFound:
      "Standard in older Rwandan buildings, especially residential and commercial construction built under Belgian and French electrical influence. Still the most commonly encountered grounded socket type across the country.",
  },
  {
    type: "G",
    name: "British Plug",
    pins: "3 rectangular pins in triangular pattern",
    grounded: true,
    ratedCurrent: "13 A (fused)",
    description:
      "The British plug features three rectangular pins and a built-in fuse, a safety feature unique to this design. Each plug contains a replaceable fuse that protects the individual appliance circuit. Type G was adopted as the official East African Community (EAC) standard in the early 2010s, with enforcement initially focused on commercial buildings. Rwanda now requires it in all new electrical installations to harmonise with Kenya, Tanzania, and Uganda.",
    compatibility: "Only fits Type G sockets",
    whereFound:
      "The official standard since the early 2010s, initially enforced for commercial buildings. Found in commercial properties, international hotels, government facilities, and increasingly in newer residential construction. Growing in prevalence across Kigali and other urban centres as Rwanda's electrical infrastructure modernises.",
  },
];

export const typeFInfo = {
  type: "F",
  name: "Schuko Plug",
  pins: "2 round pins, 4.8 mm diameter + grounding clips on socket sides",
  description:
    "The Type F (Schuko) plug is listed by the IEC for Rwanda but is uncommon in practice. It uses two round pins identical to Type E but grounds via metal clips on the sides of the socket. Mostly encountered through imported European appliances rather than as a standard Rwandan installation.",
};

export const typeJInfo = {
  type: "J",
  name: "Swiss Plug",
  pins: "3 round pins in offset triangular pattern",
  description:
    "The Type J plug is used exclusively in Switzerland and Liechtenstein. It features three round pins arranged in a triangular pattern with the ground pin offset from center. It has never been standard in Rwanda.",
};
