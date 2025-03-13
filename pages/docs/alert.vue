<template>
    <AppHeader>
        <template #pageTitle>
            <!-- <DsBreadcrumb :items="item" /> -->
        </template>
    </AppHeader>
    <AppSidebar app-name="Course Management System">
        <template #appLogo>
            <LogoCMS className="size-16" />
        </template>
        <template #menu>
            <Menu :menu-items="menuItems" />
        </template>
    </AppSidebar>

    <AppContent>
        <template #mainContent>
            <div class="grid grid-cols-4 gap-4">
                <Card hasHover :ui="uiConfig">
                    <template #header>
                        Alert
                    </template>
                    <Alert isRounded variant="solid" color="red">
                        Hellow
                    </Alert>
                    <Alert isRounded variant="soft" color="red">
                        Hellow
                    </Alert>
                </Card>
                <Card>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore explicabo animi consectetur maxime officia laboriosam obcaecati provident. Consequuntur tempora dolorum nesciunt! Repellendus nobis error quisquam aut nostrum, in saepe. Repudiandae.
                </Card>
                <Card>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil!
                </Card>
                <Card>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fuga odio asperiores, perspiciatis iste fugit quibusdam quae ea officia omnis incidunt distinctio blanditiis deleniti, cum quam mollitia? Non delectus labore, unde quidem, maiores ipsum enim nobis assumenda commodi cupiditate earum.
                </Card>
            </div>
        </template>
    </AppContent>
</template>

<script setup>
    import { menuItems } from "@/data/docs-menu";
    import { ShoppingBasketIcon, ArrowRightIcon, SettingsIcon } from 'lucide-vue-next';
    const uiConfig = {

    }
</script>