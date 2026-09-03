LootJS.modifiers(event => {
    // The Cultural Delights kernels weren't working (couldn't be planted), so give player haunted harvest kernels
    event.addTableModifier(/.*/).replaceLoot('culturaldelights:corn_kernels', 'hauntedharvest:kernels')
})
