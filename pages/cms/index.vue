<template>
    <AppHeader>
        <template #pageTitle>
            Analytics
        </template>
    </AppHeader>

    <AppSidebar app-name="Course Management System">
        <template #appLogo>
            <LogoCMS className="size-16" />
        </template>
        <template #menu>
            <DsMenu :menu-items="menuItems" />
        </template>
    </AppSidebar>

    <AppContent>
        <template #mainContent>
            <Button icon>Red Solid Button</Button>
        </template>
    </AppContent>
</template>

<script setup>
    import { menuItems } from "@/data/cms-menu";
    import { HomeIcon } from "lucide-vue-next";
</script>