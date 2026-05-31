module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/lib/data-store.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRegistration",
    ()=>createRegistration,
    "getPlatformSnapshot",
    ()=>getPlatformSnapshot
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const DATA_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "data", "registrations.json");
const createEmptyStore = ()=>({
        registrations: [],
        notifications: []
    });
async function ensureStore() {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].access(DATA_PATH);
    } catch  {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].mkdir(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(DATA_PATH), {
            recursive: true
        });
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].writeFile(DATA_PATH, JSON.stringify(createEmptyStore(), null, 2), "utf8");
    }
}
async function readStore() {
    await ensureStore();
    const raw = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(DATA_PATH, "utf8");
    const parsed = JSON.parse(raw || "{}");
    return {
        registrations: Array.isArray(parsed.registrations) ? parsed.registrations : [],
        notifications: Array.isArray(parsed.notifications) ? parsed.notifications : []
    };
}
async function writeStore(store) {
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].writeFile(DATA_PATH, JSON.stringify(store, null, 2), "utf8");
}
function getCompatibilityScore(entry, candidate) {
    let score = 0;
    if (entry.role !== candidate.role) score += 4;
    if (entry.bloodGroup === candidate.bloodGroup) score += 4;
    if (entry.city.trim().toLowerCase() === candidate.city.trim().toLowerCase()) score += 3;
    if (entry.availability === "Immediate" || candidate.availability === "Immediate") score += 2;
    if (entry.urgency === "Critical" || candidate.urgency === "Critical") score += 2;
    return score;
}
function createMatchSummary(entry, registrations) {
    return registrations.filter((candidate)=>candidate.id !== entry.id && candidate.role !== entry.role).map((candidate)=>({
            ...candidate,
            compatibilityScore: getCompatibilityScore(entry, candidate)
        })).filter((candidate)=>candidate.compatibilityScore >= 8).sort((left, right)=>right.compatibilityScore - left.compatibilityScore).slice(0, 6);
}
async function getPlatformSnapshot() {
    const store = await readStore();
    const registrations = [
        ...store.registrations
    ].sort((left, right)=>right.createdAt.localeCompare(left.createdAt));
    const donors = registrations.filter((entry)=>entry.role === "donor");
    const patients = registrations.filter((entry)=>entry.role === "patient");
    return {
        stats: {
            total: registrations.length,
            donors: donors.length,
            patients: patients.length,
            criticalRequests: patients.filter((entry)=>entry.urgency === "Critical").length
        },
        registrations: registrations.slice(0, 10),
        notifications: [
            ...store.notifications
        ].sort((left, right)=>right.createdAt.localeCompare(left.createdAt)).slice(0, 8)
    };
}
async function createRegistration(payload) {
    const store = await readStore();
    const entry = {
        ...payload,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString()
    };
    store.registrations.push(entry);
    const matches = createMatchSummary(entry, store.registrations);
    const oppositeRoleLabel = entry.role === "donor" ? "patients" : "donors";
    store.notifications.push({
        id: crypto.randomUUID(),
        createdAt: entry.createdAt,
        title: entry.role === "donor" ? "New donor is ready to help" : "Urgent blood request received",
        message: `${entry.name} from ${entry.city} registered as a ${entry.role} for ${entry.bloodGroup}.`,
        bloodGroup: entry.bloodGroup,
        city: entry.city,
        urgency: entry.urgency,
        audienceCount: Math.max(store.registrations.length - 1, 0),
        matchCount: matches.length,
        targetLabel: `${oppositeRoleLabel} in the network`
    });
    await writeStore(store);
    return {
        entry,
        matches,
        stats: {
            total: store.registrations.length,
            donors: store.registrations.filter((item)=>item.role === "donor").length,
            patients: store.registrations.filter((item)=>item.role === "patient").length,
            criticalRequests: store.registrations.filter((item)=>item.role === "patient" && item.urgency === "Critical").length
        }
    };
}
}),
"[project]/lib/validation.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateRegistration",
    ()=>validateRegistration
]);
const REQUIRED_FIELDS = [
    "role",
    "name",
    "city",
    "location",
    "purpose",
    "bloodGroup",
    "healthDetails",
    "contactNumber",
    "email",
    "availability",
    "urgency"
];
function validateRegistration(payload) {
    for (const field of REQUIRED_FIELDS){
        if (!payload[field] || `${payload[field]}`.trim() === "") {
            return `${field} is required.`;
        }
    }
    if (![
        "donor",
        "patient"
    ].includes(payload.role)) {
        return "role must be donor or patient.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
        return "Please enter a valid email address.";
    }
    if (payload.contactNumber.replace(/\D/g, "").length < 10) {
        return "Please enter a valid contact number.";
    }
    if (payload.role === "patient" && (!payload.unitsNeeded || Number(payload.unitsNeeded) < 1)) {
        return "Patients should specify the number of blood units needed.";
    }
    if (!payload.consent) {
        return "Consent is required before submitting the form.";
    }
    return null;
}
}),
"[project]/app/api/registrations/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$store$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data-store.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validation.js [app-route] (ecmascript)");
;
;
;
async function GET() {
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$store$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPlatformSnapshot"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(snapshot);
}
async function POST(request) {
    const payload = await request.json();
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateRegistration"])(payload);
    if (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error
        }, {
            status: 400
        });
    }
    const created = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$store$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createRegistration"])(payload);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(created, {
        status: 201
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__054-164._.js.map