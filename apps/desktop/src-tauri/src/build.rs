use swift_rs::build;

fn main() {
	// HOTFIX: compile the swift code for arm64
	// std::env::set_var("CARGO_CFG_TARGET_ARCH", "arm64");

	build::link_swift();
	build::link_swift_package("swift-lib", "./native/macos/");

	tauri_build::build();
}
