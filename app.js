const commCards = [
  {
    category: "Emergency",
    title: "MAYDAY",
    aircraft: "TC-JZB",
    situation: "EMERGENCY. You are experiencing an engine fire, losing height, and intend an immediate forced landing. Position: 20 miles west of Çıldır. Passing 3000 ft. Heading 360. Student pilot, no instrument qualification, 1 POB.",
    atc: "",
    answer:
      "MAYDAY, MAYDAY, MAYDAY,  Çıldır Tower. TC-JZB,\nEngine Fire, losing height. Intend an immediate forced landing.\n20 miles west of Çıldır. Passing 3000 ft. Heading 360.\nStudent Pilot, No instrument qualification 1 POB (Person on board).",
  },
  {
    category: "Entering Training Area",
    title: "W2 training area",
    aircraft: "TC-JZB",
    situation: "ENTERING TRAINING AREA. You are entering W2 training area and need to report this to Çıldır Tower.",
    atc: "",
    answer: "Çıldır Tower. TC-JZB, Entering W2 training area.",
  },
  {
    category: "Entering Training Area",
    title: "Report leaving readback",
    aircraft: "TC-JZB / JZB",
    situation: "ENTERING TRAINING AREA",
    atc: "Report leaving, JZB.",
    answer: "JZB, affirm. Report Leaving.",
  },
  {
    category: "Leaving Training Area",
    title: "End of training",
    aircraft: "TC-JZB",
    situation: "LEAVING TRAINING AREA. Training is complete and you are leaving W2 training area. Report this to Çıldır Tower.",
    atc: "",
    answer: "Çıldır Tower. TC-JZB, end of training. Leaving W2 training area.",
  },
  {
    category: "Leaving Training Area",
    title: "Report over readback",
    aircraft: "TC-JZB / JZB",
    situation: "LEAVING TRAINING AREA",
    atc: "Report over Kavşak/ Köşk/ İncirliova/ Umurlu, JZB.",
    answer: "JZB, affirm. Report over Kavşak/ Köşk/ İncirliova/Umurlu.",
  },
  {
    category: "Over",
    title: "Over Kavşak",
    aircraft: "TC-JZB",
    situation: "OVER ... You are over Kavşak and need to report your position to Çıldır Tower.",
    atc: "",
    answer: "Çıldır Tower. TC-JZB, over Kavşak.",
  },
  {
    category: "Over",
    title: "Hold over readback",
    aircraft: "TC-JZB / JZB",
    situation: "OVER ...",
    atc: "JZB, hold over Kavşak. Report joining left hand baseleg for RWY 27.",
    answer: "JZB, hold over Kavşak. Report joining left hand baseleg for RWY 27.",
  },
  {
    category: "Downwind / Base Leg / Final",
    title: "On ... / left hand baseleg",
    aircraft: "TC-JZB",
    situation: "ON DOWNWIND/BASE LEG/FINAL. You are on the relevant circuit leg / left hand baseleg for RWY 27 and need to report it to Çıldır Tower.",
    atc: "",
    answer: "Çıldır Tower. TC-JZB. on .../left hand baseleg for RWY 27.",
  },
  {
    category: "Downwind / Base Leg / Final",
    title: "Report on ... / final readback",
    aircraft: "TC-JZB / JZB",
    situation: "ON DOWNWIND/BASE LEG/FINAL",
    atc: "Report on .../final for RWY 27, JZB.",
    answer: "JZB, affirm. Report on .../final for RWY 27.",
  },
  {
    category: "Final Approach and Landing",
    title: "Final intention",
    aircraft: "TC-JZB",
    situation: "FINAL APPROACH AND LANDING. You are on final for RWY 27 and need to state your intention as touch n go/full stop.",
    atc: "",
    answer: "Çıldır Tower. TC-JZB, on final for RWY 27, intention touch n go/full stop.",
  },
  {
    category: "Final Approach and Landing",
    title: "Cleared to land readback",
    aircraft: "TC-JZB / JZB",
    situation: "FINAL APPROACH AND LANDING",
    atc: "Cleared to land RWY 27, JZB.",
    answer: "Cleared to land RWY 27, JZB.",
  },
  {
    category: "Final Approach and Landing",
    title: "Continue approach readback",
    aircraft: "TC-JZB / JZB",
    situation: "FINAL APPROACH AND LANDING",
    atc: "JZB, continue approach.",
    answer: "JZB, continue approach.",
  },
  {
    category: "Final Approach and Landing",
    title: "Landing clearance with wind",
    aircraft: "TC-JZB / JZB",
    situation: "FINAL APPROACH AND LANDING",
    atc: "JZB, cleared to land RWY 27, wind 210 degrees, 7 knots.",
    answer: "JZB, cleared to land RWY 27, wind 210 degrees, 7 knots.",
  },
  {
    category: "Final Approach and Landing",
    title: "Touch and go clearance with wind",
    aircraft: "TC-JZB / JZB",
    situation: "FINAL APPROACH AND LANDING",
    atc: "JZB, cleared to touch and go RWY 27, wind 210 degrees, 7 knots.",
    answer: "JZB, cleared to touch and go RWY 27, wind 210 degrees, 7 knots.",
  },
  {
    category: "Request Taxi",
    title: "Ready for taxi",
    aircraft: "TC-JZB",
    situation: "REQUEST TAXI. Before takeoff, before brakes-release, you are ready for/request taxi and need to call Çıldır Ground.",
    atc: "",
    answer: "Çıldır Ground. TC-JZB, ready for/request taxi.",
  },
  {
    category: "Request Taxi",
    title: "Taxi clearance readback",
    aircraft: "TC-JZB / JZB",
    situation: "REQUEST TAXI",
    atc: "Cleared taxi to holding point RWY 27. Contact tower 124.500, JZB.",
    answer: "JZB, cleared taxi to holding point RWY 27. Contact tower 124.500.",
  },
  {
    category: "Engine Start-Up",
    title: "Engine start-up request",
    aircraft: "TC-JZB",
    situation: "ENGINE START-UP. Start the first call with Çıldır Ground, say good morning, and request engine start-up.",
    atc: "",
    answer: "Çıldır Ground. Günaydın. TC-JZB, request engine start-up.",
  },
  {
    category: "Engine Start-Up",
    title: "Start-up approved readback",
    aircraft: "TC-JZB / JZB",
    situation: "ENGINE START-UP",
    atc: "Start up approved, active RWY27, QNH:1018, JZB.",
    answer: "JZB, Start up approved, active RWY27, QNH:1018.",
  },
  {
    category: "Before Takeoff",
    title: "Ready for departure",
    aircraft: "TC-JZB",
    situation: "BEFORE TAKEOFF. At holding point RWY 27, after the holding point actions, call Çıldır Tower and report ready for departure.",
    atc: "",
    answer: "Çıldır Tower. Günaydın. TC-JZB, holding point RWY 27. Ready for departure.",
  },
  {
    category: "Before Takeoff",
    title: "Cleared for takeoff readback",
    aircraft: "TC-JZB / JZB",
    situation: "BEFORE TAKEOFF",
    atc: "Cleared for Takeoff RWY 27, JZB.",
    answer: "Cleared for Takeoff RWY 27, JZB.",
  },
  {
    category: "Before Takeoff",
    title: "Line up and wait readback",
    aircraft: "TC-JZB / JZB",
    situation: "BEFORE TAKEOFF",
    atc: "JZB, Line up and wait.",
    answer: "JZB, Line up and wait.",
  },
  {
    category: "Before Takeoff",
    title: "Behind landing aircraft readback",
    aircraft: "TC-JZB / JZB",
    situation: "BEFORE TAKEOFF",
    atc: "JZB, Behind landing aircraft, line up and wait behind.",
    answer: "JZB, Behind landing aircraft, line up and wait behind.",
  },
  {
    category: "Before Takeoff",
    title: "Line up and cleared for takeoff",
    aircraft: "TC-JZB / JZB",
    situation: "BEFORE TAKEOFF",
    atc: "JZB, Line up and cleared for takeoff RWY 27.",
    answer: "JZB, Line up and cleared for takeoff RWY 27.",
  },
  {
    category: "Before Takeoff",
    title: "Cleared for takeoff",
    aircraft: "TC-JZB / JZB",
    situation: "BEFORE TAKEOFF",
    atc: "JZB, Cleared for takeoff RWY 27.",
    answer: "JZB, Cleared for takeoff RWY 27.",
  },
  {
    category: "After Landing",
    title: "Vacate RWY instruction readback",
    aircraft: "TC-JZB",
    situation: "AFTER LANDING",
    atc: "Take 2nd right to vacate RWY . Report RWY 27 vacated, TC-JZB.",
    answer: "Take 2nd right to vacate RWY . Report RWY 27 vacated, TC-JZB.",
  },
  {
    category: "After Landing",
    title: "RWY vacated report",
    aircraft: "TC-JZB",
    situation: "AFTER LANDING. You have vacated RWY 27 and need to report it to Çıldır Tower.",
    atc: "",
    answer: "Çıldır Tower. TC-JZB, RWY 27 vacated.",
  },
  {
    category: "After Landing",
    title: "Contact ground readback",
    aircraft: "TC-JZB",
    situation: "AFTER LANDING",
    atc: "Contact ground 121.900, TC-JZB.",
    answer: "TC-JZB. Contact ground 121.900.",
  },
  {
    category: "After Landing",
    title: "Take second right readback",
    aircraft: "TC-JZB",
    situation: "AFTER LANDING",
    atc: "TC-JZB, take 2nd right to vacate RWY . Report vacated RWY .",
    answer: "TC-JZB, take 2nd right to vacate RWY. Report vacated RWY.",
  },
];

const checklistGroups = [
  {
    id: "normal",
    name: "Normal Procedures",
    shortName: "Normal",
    description: "C-172S normal checklist flow from before start to securing airplane.",
    sections: [
      section("before-start", "Before Starting Engine", "Ground preparation", [
        item("Preflight Inspection", "COMPLETE"),
        item("Passenger Briefing", "COMPLETE"),
        item("Seats and Seat Belts", "ADJUST and LOCK", "Verify inertia reel locking."),
        item("Brakes", "TEST and SET"),
        item("Circuit Breakers", "CHECK IN"),
        item("Electrical Equipment", "OFF"),
        item("AVIONICS Switch (BUS 1 and BUS 2)", "OFF"),
        item("FUEL SELECTOR Valve", "BOTH"),
        item("FUEL SHUTOFF Valve", "ON", "Push full in."),
      ]),
      section("start-engine", "Starting Engine (With Battery)", "Start sequence", [
        item("Throttle Control", "OPEN 1/4 INCH"),
        item("Mixture Control", "IDLE CUTOFF", "Pull full out."),
        item("STBY BATT Switch - TEST", "HOLD for 10 seconds", "Verify green TEST lamp does not go off."),
        item("STBY BATT Switch - ARM", "ARM", "Verify that PFD comes on."),
        item("Engine Indicating System", "CHECK PARAMETERS", "Verify no red X's through ENGINE page indicators."),
        item("BUS E Volts", "CHECK", "Verify 24 VOLTS minimum shown."),
        item("M BUS Volts", "CHECK", "Verify 1.5 VOLTS or less shown."),
        item("BATT S Amps", "CHECK", "Verify discharge shown negative."),
        item("STBY BATT Annunciator", "CHECK"),
        item("START UP CLEARANCE", "REQUEST"),
        item("Propeller Area", "CLEAR"),
        item("MASTER Switch (ALT and BAT)", "ON"),
        item("BEACON Light Switch", "ON"),
        item("FUEL PUMP Switch", "ON"),
        item("Mixture Control", "SET to FULL RICH then IDLE CUTOFF", "Until stable fuel flow is indicated, then set to idle cutoff."),
        item("FUEL PUMP Switch", "OFF"),
        item("MAGNETOS Switch", "START", "Release when engine starts."),
        item("Mixture Control", "ADVANCE SMOOTHLY TO RICH", "When engine starts."),
        item("Oil Pressure", "CHECK", "Oil pressure should increase into the green band in 30 to 60 seconds."),
        item("AMPS (M BATT and BATT S)", "CHECK", "Verify charge shown positive."),
        item("LOW VOLTS Annunciator", "CHECK", "Verify annunciator is not shown."),
        item("NAV Light Switch", "ON", "As required."),
        item("AVIONICS Switch (BUS 1 and BUS 2)", "ON"),
        item("HEADSET and RADIO", "CHECK"),
      ]),
      section("before-takeoff", "Before Takeoff", "Run-up and configuration", [
        item("Parking Brake", "SET"),
        item("Pilot and Passenger Seat Backs", "MOST UPRIGHT POSITION"),
        item("Seats and Seat Belts", "CHECK SECURE"),
        item("Cabin Doors", "CLOSED and LOCKED"),
        item("Flight Controls (PFD)", "FREE and CORRECT"),
        item("FLAPS", "CHECK Full Travel"),
        item("WING FLAPS", "UP - 10°", "10° preferred."),
        item("Flight Instruments (PFD)", "CHECK", "No red X's."),
        item("ALTIMETERS - PFD (BARO)", "SET"),
        item("ALTIMETERS - Standby Altimeter", "SET"),
        item("ALT SEL", "SET"),
        item("Standby Flight Instruments", "CHECK"),
        item("Fuel Quantity", "CHECK"),
        item("Mixture Control", "RICH"),
        item("FUEL SELECTOR Valve", "SET BOTH"),
        item("Autopilot", "ENGAGE", "If installed."),
        item("Flight Controls", "CHECK", "Verify autopilot can be overpowered in pitch and roll."),
        item("A/P TRIM DISC Button", "PRESS", "Verify autopilot disengages and aural alert is heard."),
        item("Flight Director", "OFF", "If installed."),
        item("Elevator Trim Control", "SET FOR TAKEOFF"),
        item("Cylinder Head Temperature (CHT)", "CHECK", "All above 200°F."),
        item("Throttle Control", "1800 RPM"),
        item("MAGNETOS Switch", "CHECK", "RPM drop should not exceed 175 RPM on either magneto or 50 RPM differential."),
        item("VAC Indicator", "CHECK", "If installed."),
        item("Engine Indicators", "CHECK"),
        item("Ammeters and Voltmeters", "CHECK"),
        item("Alternator", "CHECK", "All lights and Pitot Heat ON; volts should show between 27 and 29."),
        item("Annunciators", "CHECK", "Verify no annunciators are shown."),
        item("Throttle Control", "CHECK IDLE"),
        item("Throttle Control", "1000 RPM or LESS"),
        item("Throttle Control Friction Lock", "ADJUST"),
        item("COM Frequency(s)", "SET"),
        item("NAV Frequency(s)", "SET"),
        item("FMS/GPS Flight Plan", "AS DESIRED"),
        item("XPDR", "SET"),
        item("CDI Softkey", "SELECT NAV source"),
        item("CABIN PWR 12V Switch", "OFF", "If installed."),
        item("Wing Flaps", "UP - 10°", "10° preferred."),
        item("TAKEOFF BRIEFING", "PERFORM"),
        item("TAXI CLEARANCE", "REQUEST"),
        item("TAXI Light Switch", "ON"),
        item("Brakes", "RELEASE"),
      ]),
      section("below-line", "Below The Line", "Line-up items", [
        item("LINE UP CLEARANCE", "OBTAIN"),
        item("Cabin Windows", "CLOSED and LOCKED"),
        item("ALL Light Switches", "ON"),
        item("Brakes", "RELEASE"),
      ]),
      section("normal-takeoff", "Normal Takeoff", "Takeoff roll and climb", [
        item("Wing Flaps", "UP - 10°", "10° preferred."),
        item("Throttle Control", "FULL", "Push full in."),
        item("Mixture Control", "RICH", "Above 3000 ft pressure altitude, lean for maximum RPM."),
        item("Elevator Control", "LIFT NOSEWHEEL AT 55 KIAS"),
        item("Brakes", "APPLY", "When positive climb."),
        item("Throttle Control Friction Lock", "LOCK"),
        item("Climb Airspeed", "70 - 80 KIAS"),
        item("Wing Flaps", "RETRACT", "At safe altitude."),
        item("Elevator Trim Control", "ADJUST"),
        item("Land Light Switch", "OFF"),
      ]),
      section("enroute-climb", "Enroute Climb", "Climb checks", [
        item("Airspeed", "70 - 85 KIAS"),
        item("Throttle Control", "FULL", "In green arc."),
        item("Mixture Control", "RICH", "Above 3000 ft pressure altitude, lean for maximum RPM."),
      ]),
      section("cruise", "Cruise", "Cruise setup", [
        item("Power", "2100 - 2700 RPM", "No more than 75% power recommended."),
        item("Elevator Trim Control", "ADJUST"),
        item("Mixture Control", "LEAN", "For desired performance or economy."),
        item("FMS/GPS", "REVIEW and BRIEF"),
      ]),
      section("descent", "Descent", "Arrival setup", [
        item("Power", "AS DESIRED"),
        item("Mixture", "ADJUST", "If necessary to make engine run smoothly."),
        item("Altimeters - PFD (BARO)", "SET"),
        item("Altimeters - Standby Altimeter", "SET"),
        item("ALT SEL", "SET"),
        item("CDI Softkey", "SELECT NAV SOURCE"),
        item("FMS/GPS", "REVIEW and BRIEF"),
        item("FUEL SELECTOR Valve", "BOTH"),
        item("Wing Flaps", "AS DESIRED", "UP-10° below 110 KIAS; 10°-FULL below 85 KIAS."),
      ]),
      section("before-landing", "Before Landing", "Final configuration", [
        item("Pilot and Passenger Seat Backs", "MOST UPRIGHT POSITION"),
        item("Seats and Seat Belts", "SECURED and LOCKED"),
        item("FUEL SELECTOR Valve", "BOTH"),
        item("Mixture Control", "RICH"),
        item("LAND and TAXI Light Switches", "ON"),
        item("Autopilot", "OFF", "If installed."),
        item("CABIN PWR 12V Switch", "OFF", "If installed."),
      ]),
      section("normal-landing", "Normal Landing", "Landing profile", [
        item("Airspeed", "65 - 75 KIAS", "Flaps UP."),
        item("Wing Flaps", "AS DESIRED", "UP-10° below 110 KIAS; 10°-FULL below 85 KIAS."),
        item("Airspeed", "60 - 70 KIAS", "Flaps FULL."),
        item("Elevator Trim Control", "ADJUST"),
        item("Touchdown", "MAIN WHEELS FIRST"),
        item("Landing Roll", "LOWER NOSEWHEEL GENTLY"),
        item("Braking", "MINIMUM REQUIRED"),
      ]),
      section("after-landing", "After Landing", "Clear of runway", [
        item("Elevator Trim Control", "SET for TAKEOFF"),
        item("STROBE and LAND Light Switches", "OFF"),
        item("TAXI Light Switch", "AS DESIRED"),
        item("PITOT HEAT", "OFF"),
      ]),
      section("securing", "Securing Airplane", "Shutdown and parking", [
        item("Parking Brake", "SET"),
        item("TAXI Light Switch", "OFF"),
        item("Throttle Control", "1800 RPM", "For 15 to 20 sec."),
        item("Electrical Equipment", "OFF"),
        item("ADF", "OFF", "If installed."),
        item("NAV Light Switch", "OFF"),
        item("AVIONICS Switch (BUS 1 and BUS 2)", "OFF"),
        item("Throttle Control", "1000 - 1200 RPM"),
        item("Mixture Control", "IDLE CUTOFF"),
        item("MAGNETOS Switch", "OFF"),
        item("KEY", "REMOVE"),
        item("BEACON Light Switch", "OFF"),
        item("MASTER Switch (ALT and BAT)", "OFF"),
        item("ENG Hours & Remaining FUEL", "NOTED"),
        item("STBY BATT Switch", "OFF"),
        item("Control Lock", "INSTALL"),
        item("FUEL SELECTOR Valve", "LEFT or RIGHT", "To prevent crossfeeding between tanks."),
      ]),
    ],
  },
  {
    id: "preflight",
    name: "Preflight Inspection",
    shortName: "Preflight",
    description: "Cabin and walkaround inspection flow before the normal checklist.",
    sections: [
      section("preflight-cockpit", "Cockpit / Documents", "Preflight inspection", [
        item("Pitot Tube Cover", "REMOVE", "Check for pitot blockage."),
        item("Pilot's Operating Handbook", "ACCESSIBLE TO PILOT"),
        item("G1000 Reference Guide", "ACCESSIBLE TO PILOT"),
        item("Airplane Weight-Balance", "CHECKED"),
        item("Parking Brake", "SET"),
        item("Control Wheel Lock", "REMOVE"),
        item("Magnetos Switch", "OFF"),
        item("Avionics Switch (BUS 1-2)", "OFF"),
        item("Master Switch (ALT-BAT)", "ON"),
        item("Primary Flight Display", "CHECK", "Verify PFD is ON."),
        item("Fuel Quantity (L-R)", "CHECK"),
        item("Low Fuel Annunciator", "CHECK", "Verify not shown on PFD."),
        item("Oil Pressure Annunciator", "CHECK", "Verify annunciator is shown."),
        item("Low Vacuum Annunciator", "CHECK", "Verify annunciator is shown."),
        item("Avionics Switch (BUS 1)", "ON"),
        item("Forward Avionics Fan", "CHECK", "Verify fan is heard."),
        item("Avionics Switch (BUS 1)", "OFF"),
        item("Avionics Switch (BUS 2)", "ON"),
        item("Aft Avionics Fan", "CHECK", "Verify fan is heard."),
        item("Avionics Switch (BUS 2)", "OFF"),
        item("Pitot Heat Switch", "ON", "Warm within 30 seconds."),
        item("Pitot Heat Switch", "OFF"),
        item("Low Volts Annunciator", "CHECK", "Verify annunciator is shown."),
        item("Master Switch (ALT-BAT)", "OFF"),
        item("Elevator Trim Control", "TAKEOFF position"),
        item("Fuel Selector Valve", "BOTH"),
        item("Alt Static Air Valve", "OFF", "Push full in."),
        item("Fire Extinguisher", "CHECK", "Verify in green arc."),
      ]),
      section("cabin", "Cabin", "Walkaround station", [
        item("Baggage Compartment Door", "CHECK", "Lock with key."),
        item("Rudder Gust Lock", "REMOVE", "If installed."),
        item("Tail Tiedown", "DISCONNECT"),
        item("Control Surfaces", "CHECK", "Movement and security."),
        item("Elevator Trim Tab", "CHECK", "Security."),
        item("Antennas", "CHECK", "Attachment and condition."),
      ]),
      section("empennage", "Empennage", "Walkaround station", [
        item("Aileron", "CHECK", "Movement and security."),
        item("Flap", "CHECK", "Security and condition."),
      ]),
      section("right-wing-trailing", "Right Wing Trailing Edge", "Walkaround station", [
        item("Wing Tiedown", "DISCONNECT"),
        item("Main Wheel Tire", "CHECK"),
        item("Fuel Tank Quick Drain Valves", "DRAIN"),
        item("Fuel Quantity", "CHECK VISUALLY"),
        item("Fuel Filler Cap", "SECURE and VENT CLEAR"),
      ]),
      section("right-wing", "Right Wing", "Walkaround station", [
        item("Engine Oil Dipstick/Filler Cap - Oil Level", "CHECK"),
        item("Engine Oil Dipstick/Filler Cap", "SECURE"),
        item("Propeller and Spinner", "CHECK", "For nicks and security."),
        item("Engine Cooling Air Inlets", "CHECK", "Clear of obstructions."),
        item("Air Filter", "CHECK", "Dust, foreign matter."),
        item("Nosewheel Strut and Tire", "CHECK"),
        item("Fuel Strainer Quick Drain Valve", "DRAIN"),
        item("Static Source Opening", "CHECK", "Verify opening is clear."),
      ]),
      section("nose", "Nose", "Walkaround station", [
        item("Fuel Tank Vent Opening", "CHECK", "Blockage."),
        item("Stall Warning Opening", "CHECK", "Blockage."),
        item("Landing/Taxi Light", "CHECK"),
      ]),
      section("left-wing-leading", "Left Wing Leading Edge", "Walkaround station", [
        item("Wing Tiedown", "DISCONNECT"),
        item("Main Wheel Tire", "CHECK"),
        item("Fuel Tank Quick Drain Valves", "DRAIN"),
        item("Fuel Quantity", "CHECK VISUALLY"),
        item("Fuel Filler Cap", "SECURE and VENT CLEAR"),
      ]),
      section("left-wing", "Left Wing", "Walkaround station", [
        item("Aileron", "CHECK", "Movement and security."),
        item("Flap", "CHECK", "Security and condition."),
      ]),
      section("left-wing-trailing", "Left Wing Trailing Edge", "Walkaround station", [
        item("Safety Reminder", "SAFETY FIRST REMEMBER HATS"),
      ]),
    ],
  },
  {
    id: "vital",
    name: "Vital Checks",
    shortName: "Vital",
    description: "Holding point vital checks from the training notes.",
    sections: [
      section("holding-point-vital", "Hayati Kontroller (Holding Point)", "Memory scan", [
        item("Seat Backs", "MOST UPRIGHT / DİK"),
        item("Seat Belts", "SECURED / BAĞLI"),
        item("Cabin Doors and Windows", "CLOSED / KAPALI"),
        item("Fuel Selector", "BOTH"),
        item("Fuel Shutoff", "ON / IN"),
        item("Trim", "TAKEOFF POSITION"),
        item("Flaps", "10"),
        item("Mixture", "RICH"),
        item("Magnetos", "BOTH"),
        item("Master", "ON"),
        item("Avionics", "ON"),
        item("Standby Battery", "ARM"),
        item("Engine", "ALL GREEN"),
        item("HSI, Compass, Turn Coordinator", "NORMAL"),
        item("Base Legs", "CLEAR / TEMİZ"),
        item("Final Approach", "CLEAR / TEMİZ"),
        item("Runway", "IDENTIFIED"),
        item("Heading Bug", "SET"),
      ]),
    ],
  },
];

const modeLabels = {
  review: "Study lines",
  fill: "Response quiz",
  order: "Sequence drill",
};

const ORDER_CHUNK_SIZE = 6;

const appState = {
  view: "home",
  selectedHomeMode: "comm",
  commOrder: "sequence",
  commIndex: 0,
  commCards: [...commCards],
  checklistMode: "review",
  checklistGroupId: "normal",
  checklistSectionId: "before-start",
  checklistIndex: 0,
  orderChunkStart: 0,
  orderSelected: [],
  orderOptions: [],
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  bindEvents();
  renderAll();
});

function section(id, title, phase, items) {
  return { id, title, phase, items };
}

function item(challenge, response, note = "") {
  return { challenge, response, note };
}

function bindElements() {
  Object.assign(els, {
    homeView: document.querySelector("#homeView"),
    commView: document.querySelector("#commView"),
    checklistHubView: document.querySelector("#checklistHubView"),
    checklistPracticeView: document.querySelector("#checklistPracticeView"),
    progressPill: document.querySelector("#progressPill"),
    modeCards: document.querySelectorAll(".mode-card"),
    startSelectedMode: document.querySelector("#startSelectedMode"),
    homeButtons: document.querySelectorAll("[data-home]"),
    orderButtons: document.querySelectorAll("[data-order]"),
    cardCategory: document.querySelector("#cardCategory"),
    cardTitle: document.querySelector("#cardTitle"),
    cardCounter: document.querySelector("#cardCounter"),
    aircraftPrompt: document.querySelector("#aircraftPrompt"),
    situationPrompt: document.querySelector("#situationPrompt"),
    atcPrompt: document.querySelector("#atcPrompt"),
    answerInput: document.querySelector("#answerInput"),
    showAnswer: document.querySelector("#showAnswer"),
    checkAnswer: document.querySelector("#checkAnswer"),
    referenceAnswer: document.querySelector("#referenceAnswer"),
    answerText: document.querySelector("#answerText"),
    feedback: document.querySelector("#feedback"),
    prevCard: document.querySelector("#prevCard"),
    nextCard: document.querySelector("#nextCard"),
    resetCard: document.querySelector("#resetCard"),
    checklistModeSelect: document.querySelector("#checklistModeSelect"),
    checklistGroupSelect: document.querySelector("#checklistGroupSelect"),
    checklistSectionGrid: document.querySelector("#checklistSectionGrid"),
    backChecklistHub: document.querySelector("#backChecklistHub"),
    checklistPracticeMode: document.querySelector("#checklistPracticeMode"),
    checklistPracticeTitle: document.querySelector("#checklistPracticeTitle"),
    checklistGroupLabel: document.querySelector("#checklistGroupLabel"),
    checklistStepTitle: document.querySelector("#checklistStepTitle"),
    checklistStepContext: document.querySelector("#checklistStepContext"),
    checklistCounter: document.querySelector("#checklistCounter"),
    checklistReviewPanel: document.querySelector("#checklistReviewPanel"),
    checklistChallenge: document.querySelector("#checklistChallenge"),
    checklistResponse: document.querySelector("#checklistResponse"),
    checklistNote: document.querySelector("#checklistNote"),
    checklistFillPanel: document.querySelector("#checklistFillPanel"),
    fillChallenge: document.querySelector("#fillChallenge"),
    checklistAnswerInput: document.querySelector("#checklistAnswerInput"),
    showChecklistAnswer: document.querySelector("#showChecklistAnswer"),
    checkChecklistAnswer: document.querySelector("#checkChecklistAnswer"),
    checklistFeedback: document.querySelector("#checklistFeedback"),
    checklistReferenceAnswer: document.querySelector("#checklistReferenceAnswer"),
    checklistAnswerText: document.querySelector("#checklistAnswerText"),
    orderDrillPanel: document.querySelector("#orderDrillPanel"),
    orderTargets: document.querySelector("#orderTargets"),
    orderOptions: document.querySelector("#orderOptions"),
    orderChunkLabel: document.querySelector("#orderChunkLabel"),
    orderFeedback: document.querySelector("#orderFeedback"),
    resetOrderDrill: document.querySelector("#resetOrderDrill"),
    prevChecklistStep: document.querySelector("#prevChecklistStep"),
    resetChecklistStep: document.querySelector("#resetChecklistStep"),
    nextChecklistStep: document.querySelector("#nextChecklistStep"),
  });
}

function bindEvents() {
  els.modeCards.forEach((card) => {
    if (card.classList.contains("disabled")) return;
    card.addEventListener("click", () => {
      appState.selectedHomeMode = card.dataset.mode;
      renderHome();
    });
  });

  els.startSelectedMode.addEventListener("click", () => {
    if (appState.selectedHomeMode === "checklist") {
      showChecklistHub();
      return;
    }
    showComm();
  });

  els.homeButtons.forEach((button) => button.addEventListener("click", showHome));
  els.showAnswer.addEventListener("click", revealCommAnswer);
  els.checkAnswer.addEventListener("click", checkCommAnswer);
  els.prevCard.addEventListener("click", () => moveCommCard(-1));
  els.nextCard.addEventListener("click", () => moveCommCard(1));
  els.resetCard.addEventListener("click", clearCommAttempt);
  els.answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) checkCommAnswer();
  });

  els.orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      appState.commOrder = button.dataset.order;
      appState.commCards = appState.commOrder === "shuffle" ? shuffle(commCards) : [...commCards];
      appState.commIndex = 0;
      renderComm();
      els.answerInput.focus();
    });
  });

  els.checklistModeSelect.addEventListener("change", () => {
    appState.checklistMode = els.checklistModeSelect.value;
    renderChecklistHub();
  });
  els.checklistGroupSelect.addEventListener("change", () => {
    appState.checklistGroupId = els.checklistGroupSelect.value;
    appState.checklistSectionId = getCurrentGroup().sections[0].id;
    renderChecklistHub();
  });
  els.backChecklistHub.addEventListener("click", showChecklistHub);
  els.prevChecklistStep.addEventListener("click", () => moveChecklistStep(-1));
  els.nextChecklistStep.addEventListener("click", () => moveChecklistStep(1));
  els.resetChecklistStep.addEventListener("click", resetChecklistPractice);
  els.showChecklistAnswer.addEventListener("click", revealChecklistAnswer);
  els.checkChecklistAnswer.addEventListener("click", checkChecklistAnswer);
  els.checklistAnswerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkChecklistAnswer();
  });
  els.resetOrderDrill.addEventListener("click", resetOrderDrill);
}

function renderAll() {
  renderHome();
  renderComm();
  renderChecklistHub();
}

function showHome() {
  appState.view = "home";
  setActiveView("home");
  renderHome();
}

function showComm() {
  appState.view = "comm";
  setActiveView("comm");
  renderComm();
  window.setTimeout(() => els.answerInput.focus(), 0);
}

function showChecklistHub() {
  appState.view = "checklistHub";
  setActiveView("checklistHub");
  renderChecklistHub();
}

function showChecklistPractice(sectionId) {
  appState.view = "checklistPractice";
  appState.checklistSectionId = sectionId;
  appState.checklistIndex = 0;
  appState.orderChunkStart = 0;
  resetOrderState();
  setActiveView("checklistPractice");
  renderChecklistPractice();
}

function setActiveView(view) {
  els.homeView.classList.toggle("active", view === "home");
  els.commView.classList.toggle("active", view === "comm");
  els.checklistHubView.classList.toggle("active", view === "checklistHub");
  els.checklistPracticeView.classList.toggle("active", view === "checklistPractice");
}

function renderHome() {
  els.modeCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.mode === appState.selectedHomeMode);
  });
  els.startSelectedMode.textContent =
    appState.selectedHomeMode === "checklist" ? "Open Checklist Trainer" : "Start Comm practice";
  if (appState.view === "home") {
    els.progressPill.textContent = appState.selectedHomeMode === "checklist"
      ? `${getChecklistItemCount()} items`
      : `${commCards.length} cards`;
  }
}

function renderComm() {
  const card = appState.commCards[appState.commIndex];
  if (!card) return;

  els.orderButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.order === appState.commOrder);
  });
  if (appState.view === "comm") {
    els.progressPill.textContent = `${appState.commIndex + 1} / ${appState.commCards.length}`;
  }
  els.cardCounter.textContent = `${appState.commIndex + 1} / ${appState.commCards.length}`;
  els.cardCategory.textContent = card.category;
  els.cardTitle.textContent = card.title;
  els.aircraftPrompt.textContent = card.aircraft;
  els.situationPrompt.textContent = card.situation;
  els.atcPrompt.textContent = card.atc || "";
  els.answerText.textContent = card.answer;
  els.prevCard.disabled = appState.commIndex === 0;
  els.nextCard.disabled = appState.commIndex === appState.commCards.length - 1;
  clearCommAttempt();
}

function moveCommCard(direction) {
  const nextIndex = appState.commIndex + direction;
  if (nextIndex < 0 || nextIndex >= appState.commCards.length) return;
  appState.commIndex = nextIndex;
  renderComm();
  els.answerInput.focus();
}

function clearCommAttempt() {
  els.answerInput.value = "";
  els.referenceAnswer.hidden = true;
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
}

function revealCommAnswer() {
  els.referenceAnswer.hidden = false;
}

function checkCommAnswer() {
  const card = appState.commCards[appState.commIndex];
  const typed = normalize(els.answerInput.value);
  const acceptedAnswers = getAcceptedCommAnswers(card).map(normalize);

  if (!typed) {
    showFeedback(els.feedback, "Type the pilot response first.", "miss");
    return;
  }

  if (acceptedAnswers.some(requiresShortCallsign) && typed.includes("tc jzb")) {
    showFeedback(
      els.feedback,
      "Try again. ATC shortened the callsign to JZB, so the pilot response should also use JZB instead of TC-JZB.",
      "miss"
    );
    return;
  }

  if (acceptedAnswers.some((answer) => answer.includes("affirm")) && !typed.includes("affirm")) {
    showFeedback(els.feedback, "Try again. The guide requires the acknowledgement word 'affirm' in this response.", "miss");
    return;
  }

  const score = Math.max(...acceptedAnswers.map((answer) => similarity(typed, answer)));
  if (score >= 0.92) {
    showFeedback(els.feedback, "Very good. This is very close to the guide line.", "good");
    return;
  }
  if (score >= 0.72) {
    showFeedback(els.feedback, "Close. Check the callsign, aerodrome, RWY, frequency, and numbers one by one.", "near");
    return;
  }
  showFeedback(els.feedback, "Try again. You can show the answer and type the same line once more.", "miss");
}

function renderChecklistHub() {
  const group = getCurrentGroup();
  els.checklistModeSelect.value = appState.checklistMode;
  els.checklistGroupSelect.innerHTML = checklistGroups
    .map((item) => `<option value="${item.id}">${escapeHtml(item.name)}</option>`)
    .join("");
  els.checklistGroupSelect.value = appState.checklistGroupId;
  if (appState.view === "checklistHub") {
    els.progressPill.textContent = `${getChecklistItemCount(group)} items`;
  }
  els.checklistSectionGrid.innerHTML = group.sections
    .map((sectionData) => {
      const itemCount = sectionData.items.length;
      return `
        <button class="checklist-section-card" type="button" data-section-id="${sectionData.id}">
          <span>${escapeHtml(group.shortName)}</span>
          <strong>${escapeHtml(sectionData.title)}</strong>
          <small>${escapeHtml(sectionData.phase)} · ${itemCount} items</small>
        </button>
      `;
    })
    .join("");
  els.checklistSectionGrid.querySelectorAll("[data-section-id]").forEach((button) => {
    button.addEventListener("click", () => showChecklistPractice(button.dataset.sectionId));
  });
}

function renderChecklistPractice() {
  const group = getCurrentGroup();
  const sectionData = getCurrentSection();
  const mode = appState.checklistMode;
  const items = sectionData.items;
  const currentItem = items[appState.checklistIndex] || items[0];
  const orderBounds = getOrderChunkBounds(sectionData);

  if (appState.view === "checklistPractice") {
    els.progressPill.textContent = mode === "order"
      ? `${Math.min(orderBounds.start + appState.orderSelected.length, items.length)} / ${items.length}`
      : `${appState.checklistIndex + 1} / ${items.length}`;
  }
  els.checklistPracticeMode.textContent = modeLabels[mode];
  els.checklistPracticeTitle.textContent = sectionData.title;
  els.checklistGroupLabel.textContent = group.name;
  els.checklistCounter.textContent = mode === "order"
    ? `Set ${orderBounds.start + 1}-${orderBounds.end} / ${items.length}`
    : `${appState.checklistIndex + 1} / ${items.length}`;
  els.checklistStepContext.textContent = mode === "order"
    ? `${group.name} · ${sectionData.title} · Items ${orderBounds.start + 1}-${orderBounds.end} of ${items.length}`
    : getChecklistContext(group, sectionData, appState.checklistIndex);

  els.checklistReviewPanel.hidden = mode !== "review";
  els.checklistFillPanel.hidden = mode !== "fill";
  els.orderDrillPanel.hidden = mode !== "order";
  els.prevChecklistStep.textContent = mode === "order" ? "Prev set" : "Previous";
  els.nextChecklistStep.textContent = mode === "order" ? "Next set" : "Next";
  els.resetChecklistStep.textContent = mode === "order" ? "Reset set" : "Reset";
  els.prevChecklistStep.disabled = mode === "order" ? orderBounds.start === 0 : appState.checklistIndex === 0;
  els.nextChecklistStep.disabled = mode === "order" ? orderBounds.end === items.length : appState.checklistIndex === items.length - 1;

  if (mode === "review") {
    els.checklistStepTitle.textContent = currentItem.challenge;
    els.checklistChallenge.textContent = currentItem.challenge;
    els.checklistResponse.textContent = currentItem.response;
    els.checklistNote.textContent = currentItem.note || "";
    els.checklistNote.hidden = !currentItem.note;
    return;
  }

  if (mode === "fill") {
    els.checklistStepTitle.textContent = currentItem.challenge;
    els.fillChallenge.textContent = currentItem.challenge;
    els.checklistAnswerText.textContent = currentItem.response;
    clearChecklistAnswer();
    window.setTimeout(() => els.checklistAnswerInput.focus(), 0);
    return;
  }

  renderOrderDrill();
}

function moveChecklistStep(direction) {
  if (appState.checklistMode === "order") {
    moveOrderChunk(direction);
    return;
  }

  const items = getCurrentSection().items;
  const nextIndex = appState.checklistIndex + direction;
  if (nextIndex < 0 || nextIndex >= items.length) return;
  appState.checklistIndex = nextIndex;
  renderChecklistPractice();
}

function resetChecklistPractice() {
  if (appState.checklistMode === "order") {
    resetOrderDrill();
    return;
  }
  if (appState.checklistMode === "fill") {
    clearChecklistAnswer();
    els.checklistAnswerInput.focus();
  }
}

function clearChecklistAnswer() {
  els.checklistAnswerInput.value = "";
  els.checklistReferenceAnswer.hidden = true;
  els.checklistFeedback.textContent = "";
  els.checklistFeedback.className = "feedback";
}

function revealChecklistAnswer() {
  els.checklistReferenceAnswer.hidden = false;
}

function checkChecklistAnswer() {
  const itemData = getCurrentSection().items[appState.checklistIndex];
  const result = analyzeChecklistAnswer(els.checklistAnswerInput.value, itemData);
  showFeedback(els.checklistFeedback, result.message, result.type);
}

function renderOrderDrill() {
  const sectionData = getCurrentSection();
  const bounds = getOrderChunkBounds(sectionData);
  ensureOrderStateMatchesChunk(bounds.items);
  els.checklistStepTitle.textContent = sectionData.title;
  els.orderChunkLabel.textContent = `${sectionData.title} · Items ${bounds.start + 1}-${bounds.end} of ${bounds.total}`;
  els.orderTargets.innerHTML = bounds.items
    .map((itemData, index) => {
      const selected = appState.orderSelected[index];
      const absoluteIndex = bounds.start + index + 1;
      return `
        <div class="order-target ${selected ? "filled" : ""}">
          <span>${absoluteIndex}</span>
          <p>${selected ? escapeHtml(formatChecklistLine(selected)) : "..."}</p>
        </div>
      `;
    })
    .join("");
  els.orderOptions.innerHTML = appState.orderOptions
    .filter((option) => !appState.orderSelected.includes(option))
    .map((option) => {
      const optionIndex = sectionData.items.indexOf(option);
      return `
        <button type="button" data-order-option-index="${optionIndex}">
          <span class="order-option-challenge">${escapeHtml(option.challenge)}</span>
          <span class="order-option-response">${escapeHtml(option.response)}</span>
        </button>
      `;
    })
    .join("");
  els.orderOptions.querySelectorAll("[data-order-option-index]").forEach((button) => {
    const option = sectionData.items[Number(button.dataset.orderOptionIndex)];
    button.addEventListener("click", () => chooseOrderOption(option));
  });
}

function chooseOrderOption(option) {
  const bounds = getOrderChunkBounds();
  const expected = bounds.items[appState.orderSelected.length];
  if (option !== expected) {
    showFeedback(els.orderFeedback, `Not yet. The next line should be: ${formatChecklistLine(expected)}.`, "miss");
    return;
  }

  appState.orderSelected.push(option);
  if (appState.orderSelected.length === bounds.items.length) {
    const message = bounds.end === bounds.total
      ? "Section complete. You have the sequence in order."
      : "Set complete. Move to the next set when ready.";
    showFeedback(els.orderFeedback, message, "good");
  } else {
    showFeedback(els.orderFeedback, "Good. Continue with the next item.", "good");
  }
  renderChecklistPractice();
}

function resetOrderDrill() {
  resetOrderState();
  els.orderFeedback.textContent = "";
  els.orderFeedback.className = "feedback";
  renderChecklistPractice();
}

function resetOrderState() {
  const { items } = getOrderChunkBounds();
  appState.orderSelected = [];
  appState.orderOptions = shuffle(items);
}

function getChecklistContext(group, sectionData, itemIndex) {
  return `${group.name} · ${sectionData.title} · Item ${itemIndex + 1} of ${sectionData.items.length}`;
}

function formatChecklistLine(itemData) {
  return `${itemData.challenge} → ${itemData.response}`;
}

function getOrderChunkBounds(sectionData = getCurrentSection()) {
  const total = sectionData.items.length;
  const lastStart = getLastOrderChunkStart(sectionData.items);
  const start = Math.min(Math.max(appState.orderChunkStart, 0), lastStart);
  const end = Math.min(start + ORDER_CHUNK_SIZE, total);
  return {
    start,
    end,
    total,
    items: sectionData.items.slice(start, end),
  };
}

function getLastOrderChunkStart(items) {
  if (items.length <= ORDER_CHUNK_SIZE) return 0;
  return Math.floor((items.length - 1) / ORDER_CHUNK_SIZE) * ORDER_CHUNK_SIZE;
}

function moveOrderChunk(direction) {
  const items = getCurrentSection().items;
  const lastStart = getLastOrderChunkStart(items);
  const nextStart = Math.min(Math.max(appState.orderChunkStart + direction * ORDER_CHUNK_SIZE, 0), lastStart);
  if (nextStart === appState.orderChunkStart) return;
  appState.orderChunkStart = nextStart;
  resetOrderState();
  els.orderFeedback.textContent = "";
  els.orderFeedback.className = "feedback";
  renderChecklistPractice();
}

function ensureOrderStateMatchesChunk(chunkItems) {
  const hasWrongOptions = appState.orderOptions.length !== chunkItems.length
    || appState.orderOptions.some((option) => !chunkItems.includes(option))
    || appState.orderSelected.some((option) => !chunkItems.includes(option));
  if (hasWrongOptions) resetOrderState();
}

function getCurrentGroup() {
  return checklistGroups.find((group) => group.id === appState.checklistGroupId) || checklistGroups[0];
}

function getCurrentSection() {
  const group = getCurrentGroup();
  return group.sections.find((sectionData) => sectionData.id === appState.checklistSectionId) || group.sections[0];
}

function getChecklistItemCount(group = null) {
  const groups = group ? [group] : checklistGroups;
  return groups.reduce((total, groupData) => {
    return total + groupData.sections.reduce((sectionTotal, sectionData) => sectionTotal + sectionData.items.length, 0);
  }, 0);
}

function analyzeChecklistAnswer(value, itemData) {
  const typed = normalizeChecklistResponse(value);
  const expected = normalizeChecklistResponse(itemData.response);
  const challenge = normalizeChecklistResponse(itemData.challenge);

  if (!typed) {
    return { type: "miss", message: "Type the response/action first." };
  }

  if (challenge && (typed === challenge || typed.includes(challenge))) {
    return {
      type: "miss",
      message: `Try again. You included the challenge; this field needs only the response/action: ${itemData.response}.`,
    };
  }

  const acceptedAnswers = getChecklistAcceptedResponses(itemData).map(normalizeChecklistResponse).filter(Boolean);
  const compactTyped = compactChecklistAnswer(typed);
  if (acceptedAnswers.some((answer) => typed === answer || compactTyped === compactChecklistAnswer(answer))) {
    return { type: "good", message: "Correct. Keep the challenge-response rhythm." };
  }

  const expectedTokens = getImportantResponseTokens(expected);
  const typedTokens = new Set(getImportantResponseTokens(typed));
  const missingTokens = expectedTokens.filter((token) => !typedTokens.has(token));
  const coverage = expectedTokens.length
    ? (expectedTokens.length - missingTokens.length) / expectedTokens.length
    : 0;

  if (expectedTokens.length && missingTokens.length === 0) {
    return {
      type: "good",
      message: `Correct. Guide response/action: ${itemData.response}.`,
    };
  }

  const bestScore = Math.max(...acceptedAnswers.map((answer) => similarity(typed, answer)), 0);
  if (coverage >= 0.5 || bestScore >= 0.72) {
    const missingText = missingTokens.length ? ` Missing or unclear: ${formatMissingTokens(missingTokens)}.` : "";
    return {
      type: "near",
      message: `Close.${missingText} Expected response/action: ${itemData.response}. Try once more.`,
    };
  }

  return {
    type: "miss",
    message: `Try again. Read the challenge, then answer with the guide response/action only.`,
  };
}

function getChecklistAcceptedResponses(itemData) {
  const answers = new Set([itemData.response]);
  const response = itemData.response.trim();

  response.split("/").map((part) => part.trim()).filter(Boolean).forEach((part) => answers.add(part));

  if (/^[A-Za-zÇĞİÖŞÜçğıöşü\s]+ or [A-Za-zÇĞİÖŞÜçğıöşü\s]+$/.test(response)) {
    response.split(/\s+or\s+/i).map((part) => part.trim()).filter(Boolean).forEach((part) => answers.add(part));
  }

  answers.add(response.replace(/\band\b/gi, " ").replace(/\s+/g, " ").trim());
  if (/^set to\s+/i.test(response)) {
    answers.add(response.replace(/^set to\s+/i, "").trim());
  }

  return [...answers].filter(Boolean);
}

function getImportantResponseTokens(value) {
  const optionalWords = new Set(["a", "an", "and", "as", "for", "of", "or", "the", "then", "to"]);
  return normalizeChecklistResponse(value)
    .split(" ")
    .filter((token) => token && !optionalWords.has(token))
    .filter((token) => /\d/.test(token) || token.length > 1);
}

function compactChecklistAnswer(value) {
  return getImportantResponseTokens(value).join(" ");
}

function normalizeChecklistResponse(value) {
  return normalize(value)
    .replace(/\bchecked\b/g, "check")
    .replace(/\bchecking\b/g, "check")
    .replace(/\bsecured\b/g, "secure")
    .replace(/\bsecurely\b/g, "secure")
    .replace(/\blocked\b/g, "lock")
    .replace(/\badjusted\b/g, "adjust")
    .replace(/\breleased\b/g, "release")
    .replace(/\bremoved\b/g, "remove")
    .replace(/\binstalled\b/g, "install")
    .replace(/\bselected\b/g, "select")
    .replace(/\bsecs\b/g, "seconds")
    .replace(/\bsec\b/g, "seconds")
    .replace(/\bdegrees\b/g, "")
    .replace(/\bdegree\b/g, "")
    .trim()
    .replace(/\s+/g, " ");
}

function formatMissingTokens(tokens) {
  return tokens.map((token) => token.toUpperCase()).join(", ");
}

function getAcceptedCommAnswers(card) {
  const answers = new Set([card.answer]);
  addPhraseOrderVariants(answers);
  addSlashVariants(answers);
  return [...answers];
}

function addPhraseOrderVariants(answers) {
  [...answers].forEach((answer) => {
    addReplacement(answers, answer, "Entering W2 training area", "Entering training area W2");
    addReplacement(answers, answer, "Leaving W2 training area", "Leaving training area W2");
    addReplacement(answers, answer, "Entering training area W2", "Entering W2 training area");
    addReplacement(answers, answer, "Leaving training area W2", "Leaving W2 training area");
  });
}

function addSlashVariants(answers) {
  [...answers].forEach((answer) => {
    addReplacement(answers, answer, "ready for/request taxi", "ready for taxi");
    addReplacement(answers, answer, "ready for/request taxi", "request taxi");
    addReplacement(answers, answer, "touch n go/full stop", "touch n go");
    addReplacement(answers, answer, "touch n go/full stop", "full stop");
    addReplacement(answers, answer, "Kavşak/ Köşk/ İncirliova/Umurlu", "Kavşak");
    addReplacement(answers, answer, "Kavşak/ Köşk/ İncirliova/Umurlu", "Köşk");
    addReplacement(answers, answer, "Kavşak/ Köşk/ İncirliova/Umurlu", "İncirliova");
    addReplacement(answers, answer, "Kavşak/ Köşk/ İncirliova/Umurlu", "Umurlu");
    addReplacement(answers, answer, ".../left hand baseleg", "left hand baseleg");
    addReplacement(answers, answer, ".../final", "final");
  });
}

function addReplacement(answers, source, from, to) {
  if (source.includes(from)) {
    answers.add(source.replace(from, to));
  }
}

function requiresShortCallsign(normalizedAnswer) {
  return normalizedAnswer.includes("jzb") && !normalizedAnswer.includes("tc jzb");
}

function showFeedback(element, message, type) {
  element.textContent = message;
  element.className = `feedback show ${type}`;
}

function normalize(value) {
  return String(value)
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ç", "c")
    .replaceAll("ğ", "g")
    .replaceAll("ı", "i")
    .replaceAll("ö", "o")
    .replaceAll("ş", "s")
    .replaceAll("ü", "u")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function similarity(a, b) {
  const distance = levenshtein(a, b);
  return 1 - distance / Math.max(a.length, b.length, 1);
}

function levenshtein(a, b) {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const temp = row[j];
      row[j] = a[i - 1] === b[j - 1] ? prev : Math.min(prev + 1, row[j] + 1, row[j - 1] + 1);
      prev = temp;
    }
  }
  return row[b.length];
}

function shuffle(items) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
