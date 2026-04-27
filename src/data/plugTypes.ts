export interface PlugType {
  type: string;
  name: string;
  status: "official" | "legacy";
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
    status: "legacy",
    pins: "2 round pins, 4.0 mm diameter, 19 mm spacing",
    grounded: false,
    ratedCurrent: "2.5 A",
    description:
      "A compact, ungrounded two-pin plug used for low-power devices like phone chargers, laptops, and small appliances. Type C plugs fit directly into the Type E sockets found throughout Rwanda, making them the most commonly used plug in daily life. Dedicated Type C-only sockets are very rare.",
    compatibility: "Fits into Type E (and Type F) sockets",
    whereFound:
      "Used throughout Rwanda via compatibility with Type E sockets. The standard plug for chargers, laptops, and small appliances.",
  },
  {
    type: "E",
    name: "French/Belgian Plug",
    status: "legacy",
    pins: "2 round pins, 4.8 mm diameter + ground pin on socket",
    grounded: true,
    ratedCurrent: "16 A",
    description:
      "A grounded plug where the socket provides the grounding pin rather than the plug itself. Once Rwanda's standard, Type E remains the most widespread grounded socket in older buildings. Some homes built in the late 2010s still use Type E, though commercial buildings from that period typically use Type G.",
    compatibility: "Accepts Type C and Type E plugs",
    whereFound:
      "Common in Rwandan buildings and houses constructed before the early 2010s. Still widely encountered, especially outside new construction in urban centres.",
  },
  {
    type: "G",
    name: "British Plug",
    status: "official",
    pins: "3 rectangular pins in triangular pattern",
    grounded: true,
    ratedCurrent: "13 A (fused)",
    description:
      "A three-pin plug with rectangular pins and a built-in fuse that protects individual appliance circuits. Rwanda adopted Type G as its official standard in the early 2010s as part of East African Community harmonisation, and it is now required in all new electrical installations.",
    compatibility: "Only fits Type G sockets",
    whereFound:
      "All new construction, commercial properties, hotels, and government facilities. Increasingly common in newer residential buildings across Kigali and other urban centres.",
  },
];

export const typeFInfo = {
  type: "F",
  name: "Schuko Plug",
  pins: "2 round pins, 4.8 mm diameter + grounding clips on socket sides",
  description:
    "A two-pin plug similar to Type E but grounded via metal clips on the sides of the socket. Some databases list Type F because Type E and Type F are often grouped together in European plug-compatibility data. That does not mean Rwanda commonly has Type F Schuko wall sockets.",
};

export const typeJInfo = {
  type: "J",
  name: "Swiss Plug",
  pins: "3 round pins in offset triangular pattern",
  description:
    "The Type J plug is used primarily in Switzerland and Liechtenstein. It features three round pins arranged in a triangular pattern with the ground pin offset from center. It has never been standard in Rwanda.",
};
