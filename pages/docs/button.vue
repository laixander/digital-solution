<template>
    <AppHeader>
        <template #pageTitle>
            <DsBreadcrumb :items="item" />
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
            <div class="grid grid-cols-4 gap-4">
                <DsCard>
                    <DsCardHeader simple>
                        <h3 class="font-semibold text-gray-800">Types</h3>
                    </DsCardHeader>
                    <DsCardBody>
                        <div class="*:border-b *:border-slate-100 *:py-3 first:*:pt-0 last:*:pb-0 last:*:border-0 dark:*:border-slate-800">
                            <div>
                                <DsButton primary label="Primary" />
                            </div>
                            <div>
                                <DsButton outline label="Outline" />
                            </div>
                            <div>
                                <DsButton ghost label="Ghost" />
                            </div>
                            <div>
                                <DsButton soft label="Soft" />
                            </div>
                            <div>
                                <DsButton white label="White" />
                            </div>
                            <div>
                                <DsButton link label="Link" />
                            </div>
                        </div>
                    </DsCardBody>
                </DsCard>

                <DsCard>
                    <DsCardHeader simple>
                        <h3 class="font-semibold text-gray-800">Sizes</h3>
                    </DsCardHeader>
                    <DsCardBody>
                        <div class="*:border-b *:border-slate-100 *:py-3 first:*:pt-0 last:*:pb-0 last:*:border-0 dark:*:border-slate-800">
                            <div>
                                <DsButton primary small label="Small" />
                            </div>
                            <div>
                                <DsButton primary label="Base" />
                            </div>
                            <div>
                                <DsButton primary large label="Large" />
                            </div>
                        </div>
                    </DsCardBody>
                </DsCard>

                <DsCard>
                    <DsCardHeader simple>
                        <h3 class="font-semibold text-gray-800">Pilled</h3>
                    </DsCardHeader>
                    <DsCardBody>
                        <div class="*:border-b *:border-slate-100 *:py-3 first:*:pt-0 last:*:pb-0 last:*:border-0 dark:*:border-slate-800">
                            <div>
                                <DsButton primary pilled label="Primary" />
                            </div>
                            <div>
                                <DsButton outline pilled label="Outline" />
                            </div>
                            <div>
                                <DsButton ghost pilled label="Ghost" />
                            </div>
                            <div>
                                <DsButton soft pilled label="Soft" />
                            </div>
                            <div>
                                <DsButton white pilled label="White" />
                            </div>
                        </div>
                    </DsCardBody>
                </DsCard>

                <DsCard>
                    <DsCardHeader simple>
                        <h3 class="font-semibold text-gray-800">Block</h3>
                    </DsCardHeader>
                    <DsCardBody>
                        <div class="*:border-b *:border-slate-100 *:py-3 first:*:pt-0 last:*:pb-0 last:*:border-0 dark:*:border-slate-800">
                            <div>
                                <DsButton primary block label="Primary" />
                            </div>
                            <div>
                                <DsButton outline block label="Outline" />
                            </div>
                            <div>
                                <DsButton ghost block label="Ghost" />
                            </div>
                            <div>
                                <DsButton soft block label="Soft" />
                            </div>
                            <div>
                                <DsButton white block label="White" />
                            </div>
                        </div>
                    </DsCardBody>
                </DsCard>

                <DsCard>
                    <DsCardHeader simple>
                        <h3 class="font-semibold text-gray-800">With Icon</h3>
                    </DsCardHeader>
                    <DsCardBody>
                        <div class="*:border-b *:border-slate-100 *:py-3 first:*:pt-0 last:*:pb-0 last:*:border-0 dark:*:border-slate-800">
                            <div>
                                <DsButton primary label="Add to cart">
                                    <template #leading-icon>
                                        <ShoppingBasketIcon class="flex-shrink-0 size-4" />
                                    </template>
                                </DsButton>
                            </div>
                            <div>
                                <DsButton outline label="Signup free">
                                    <template #trailing-icon>
                                        <ArrowRightIcon class="flex-shrink-0 size-4" />
                                    </template>
                                </DsButton>
                            </div>
                        </div>
                    </DsCardBody>
                </DsCard>

                <DsCard>
                    <DsCardHeader simple>
                        <h3 class="font-semibold text-gray-800">Icon Only</h3>
                    </DsCardHeader>
                    <DsCardBody>
                        <div class="*:border-b *:border-slate-100 *:py-3 first:*:pt-0 last:*:pb-0 last:*:border-0 dark:*:border-slate-800">
                            <div>
                                <DsButton primary icon>
                                    <template #icon>
                                        <ShoppingBasketIcon class="flex-shrink-0 size-4" />
                                    </template>
                                </DsButton>
                            </div>
                            <div>
                                <DsButton outline icon>
                                    <template #icon>
                                        <svg class="animate-spin flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="#2563eb" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    </template>
                                </DsButton>
                            </div>
                        </div>
                    </DsCardBody>
                </DsCard>

                <DsCard>
                    <DsCardHeader simple>
                        <h3 class="font-semibold text-gray-800">Icon Sizes</h3>
                    </DsCardHeader>
                    <DsCardBody>
                        <div class="*:border-b *:border-slate-100 *:py-3 first:*:pt-0 last:*:pb-0 last:*:border-0 dark:*:border-slate-800">
                            <div>
                                <DsButton primary icon small>
                                    <template #icon>
                                        <SettingsIcon class="flex-shrink-0 size-3" />
                                    </template>
                                </DsButton>
                            </div>
                            <div>
                                <DsButton primary icon>
                                    <template #icon>
                                        <SettingsIcon class="flex-shrink-0 size-4" />
                                    </template>
                                </DsButton>
                            </div>
                            <div>
                                <DsButton primary icon large>
                                    <template #icon>
                                        <SettingsIcon class="flex-shrink-0 size-5" />
                                    </template>
                                </DsButton>
                            </div>
                        </div>
                    </DsCardBody>
                </DsCard>

                <DsCard>
                    <DsCardHeader simple>
                        <h3 class="font-semibold text-gray-800">Disabled</h3>
                    </DsCardHeader>
                    <DsCardBody>
                        <div class="*:border-b *:border-slate-100 *:py-3 first:*:pt-0 last:*:pb-0 last:*:border-0 dark:*:border-slate-800">
                            <div>
                                <DsButton primary label="Primary" disabled />
                            </div>
                            <div>
                                <DsButton outline label="Outline" disabled />
                            </div>
                            <div>
                                <DsButton ghost label="Ghost" disabled />
                            </div>
                            <div>
                                <DsButton soft label="Soft" disabled />
                            </div>
                            <div>
                                <DsButton white label="White" disabled />
                            </div>
                            <div>
                                <DsButton link label="Link" disabled />
                            </div>
                        </div>
                    </DsCardBody>
                </DsCard>
            </div>
        </template>
    </AppContent>
</template>

<script setup>
    import { menuItems } from "@/data/docs-menu";
    import { ShoppingBasketIcon, ArrowRightIcon, SettingsIcon } from 'lucide-vue-next';

    const item = ref([
        { title: 'Actions' },
        { title: 'Button' }
    ]);
</script>