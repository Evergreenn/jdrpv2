mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// #[wasm_bindgen]
// extern {
//     fn alert(s: &str);
//     // fn console_log(s: &str);
// }

#[wasm_bindgen]
pub fn xp_state() -> f32  {
    0.0
}

// pub fn get_next_empty_inventory_space() -> u8 {

// }
