<template>
    <AppHeader>
        <template #pageTitle>
            Documentation
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
            <DsCard simple>
                <DsCardBody>
                    Home
                </DsCardBody>
            </DsCard>
        </template>
    </AppContent>
</template>

<script setup>
    import { menuItems } from "@/data/docs-menu";
</script>